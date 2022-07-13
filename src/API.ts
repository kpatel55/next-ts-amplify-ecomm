/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductsInput = {
  id?: string | null,
  title: string,
  category: string,
  image_url: string,
  price: number,
};

export type ModelProductsConditionInput = {
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image_url?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelProductsConditionInput | null > | null,
  or?: Array< ModelProductsConditionInput | null > | null,
  not?: ModelProductsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Products = {
  __typename: "Products",
  id: string,
  title: string,
  category: string,
  image_url: string,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductsInput = {
  id: string,
  title?: string | null,
  category?: string | null,
  image_url?: string | null,
  price?: number | null,
};

export type DeleteProductsInput = {
  id: string,
};

export type SearchableProductsFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  category?: SearchableStringFilterInput | null,
  image_url?: SearchableStringFilterInput | null,
  price?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableProductsFilterInput | null > | null,
  or?: Array< SearchableProductsFilterInput | null > | null,
  not?: SearchableProductsFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableProductsSortInput = {
  field?: SearchableProductsSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProductsSortableFields {
  id = "id",
  title = "title",
  category = "category",
  image_url = "image_url",
  price = "price",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableProductsAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableProductsAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableProductsAggregateField {
  id = "id",
  title = "title",
  category = "category",
  image_url = "image_url",
  price = "price",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProductsConnection = {
  __typename: "SearchableProductsConnection",
  items:  Array<Products | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelProductsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  image_url?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelProductsFilterInput | null > | null,
  or?: Array< ModelProductsFilterInput | null > | null,
  not?: ModelProductsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProductsConnection = {
  __typename: "ModelProductsConnection",
  items:  Array<Products | null >,
  nextToken?: string | null,
};

export type CreateProductsMutationVariables = {
  input: CreateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type CreateProductsMutation = {
  createProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    category: string,
    image_url: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductsMutationVariables = {
  input: UpdateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type UpdateProductsMutation = {
  updateProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    category: string,
    image_url: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductsMutationVariables = {
  input: DeleteProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type DeleteProductsMutation = {
  deleteProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    category: string,
    image_url: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SearchProductsQueryVariables = {
  filter?: SearchableProductsFilterInput | null,
  sort?: Array< SearchableProductsSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableProductsAggregationInput | null > | null,
};

export type SearchProductsQuery = {
  searchProducts?:  {
    __typename: "SearchableProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      title: string,
      category: string,
      image_url: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetProductsQueryVariables = {
  id: string,
};

export type GetProductsQuery = {
  getProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    category: string,
    image_url: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      title: string,
      category: string,
      image_url: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductsSubscription = {
  onCreateProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    category: string,
    image_url: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductsSubscription = {
  onUpdateProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    category: string,
    image_url: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductsSubscription = {
  onDeleteProducts?:  {
    __typename: "Products",
    id: string,
    title: string,
    category: string,
    image_url: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
