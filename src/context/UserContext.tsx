import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useEffect, useState } from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";

interface UserContextType {
    user: CognitoUser | null;
    setUser: Dispatch<SetStateAction<CognitoUser | null>>;
}

interface Props {
    children: ReactElement;
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export default function UserProvider(props: Props) {
    const { children } = props;
    const [user, setUser] = useState<CognitoUser | null>(null);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setUser(user);    
        } catch (err) {
            console.log(`unable to get the current user: ${err}`);
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);