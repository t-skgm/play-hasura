import { Observable } from 'graphql-typed-client'

/** query root */
export interface query_root {
  /** perform the action: "me" */
  me: Me | null
  /** fetch data from the table: "todos" */
  todos: todos[]
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: todos_aggregate
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: todos | null
  /** fetch data from the table: "users" */
  users: users[]
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: users | null
  __typename: 'query_root'
}

export interface Me {
  name: String
  role: String
  __typename: 'Me'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** select columns of table "todos" */
export enum todos_select_column {
  /** column name */
  completedAt = 'completedAt',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  user_id = 'user_id',
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

/** column ordering options */
export enum order_by {
  /** in the ascending order, nulls last */
  asc = 'asc',
  /** in the ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in the descending order, nulls first */
  desc = 'desc',
  /** in the descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in the descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last',
}

export type timetz = any

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export type timestamptz = any

export type uuid = any

/** columns and relationships of "todos" */
export interface todos {
  completedAt: timetz | null
  created_at: timestamptz | null
  id: uuid
  title: String
  updated_at: timestamptz | null
  /** An object relationship */
  user: users | null
  user_id: uuid
  __typename: 'todos'
}

/** columns and relationships of "users" */
export interface users {
  created_at: timestamptz | null
  id: uuid
  name: String
  /** An array relationship */
  todos: todos[]
  /** An aggregated array relationship */
  todos_aggregate: todos_aggregate
  updated_at: timestamptz | null
  __typename: 'users'
}

/** aggregated selection of "todos" */
export interface todos_aggregate {
  aggregate: todos_aggregate_fields | null
  nodes: todos[]
  __typename: 'todos_aggregate'
}

/** aggregate fields of "todos" */
export interface todos_aggregate_fields {
  count: Int | null
  max: todos_max_fields | null
  min: todos_min_fields | null
  __typename: 'todos_aggregate_fields'
}

/** aggregate max on columns */
export interface todos_max_fields {
  completedAt: timetz | null
  created_at: timestamptz | null
  id: uuid | null
  title: String | null
  updated_at: timestamptz | null
  user_id: uuid | null
  __typename: 'todos_max_fields'
}

/** aggregate min on columns */
export interface todos_min_fields {
  completedAt: timetz | null
  created_at: timestamptz | null
  id: uuid | null
  title: String | null
  updated_at: timestamptz | null
  user_id: uuid | null
  __typename: 'todos_min_fields'
}

/** select columns of table "users" */
export enum users_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at',
}

/** aggregated selection of "users" */
export interface users_aggregate {
  aggregate: users_aggregate_fields | null
  nodes: users[]
  __typename: 'users_aggregate'
}

/** aggregate fields of "users" */
export interface users_aggregate_fields {
  count: Int | null
  max: users_max_fields | null
  min: users_min_fields | null
  __typename: 'users_aggregate_fields'
}

/** aggregate max on columns */
export interface users_max_fields {
  created_at: timestamptz | null
  id: uuid | null
  name: String | null
  updated_at: timestamptz | null
  __typename: 'users_max_fields'
}

/** aggregate min on columns */
export interface users_min_fields {
  created_at: timestamptz | null
  id: uuid | null
  name: String | null
  updated_at: timestamptz | null
  __typename: 'users_min_fields'
}

/** mutation root */
export interface mutation_root {
  /** delete data from the table: "todos" */
  delete_todos: todos_mutation_response | null
  /** delete single row from the table: "todos" */
  delete_todos_by_pk: todos | null
  /** delete data from the table: "users" */
  delete_users: users_mutation_response | null
  /** delete single row from the table: "users" */
  delete_users_by_pk: users | null
  /** insert data into the table: "todos" */
  insert_todos: todos_mutation_response | null
  /** insert a single row into the table: "todos" */
  insert_todos_one: todos | null
  /** insert data into the table: "users" */
  insert_users: users_mutation_response | null
  /** insert a single row into the table: "users" */
  insert_users_one: users | null
  /** update data of the table: "todos" */
  update_todos: todos_mutation_response | null
  /** update single row of the table: "todos" */
  update_todos_by_pk: todos | null
  /** update data of the table: "users" */
  update_users: users_mutation_response | null
  /** update single row of the table: "users" */
  update_users_by_pk: users | null
  __typename: 'mutation_root'
}

/** response of any mutation on the table "todos" */
export interface todos_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: todos[]
  __typename: 'todos_mutation_response'
}

/** response of any mutation on the table "users" */
export interface users_mutation_response {
  /** number of affected rows by the mutation */
  affected_rows: Int
  /** data of the affected rows by the mutation */
  returning: users[]
  __typename: 'users_mutation_response'
}

/** unique or primary key constraints on table "todos" */
export enum todos_constraint {
  /** unique or primary key constraint */
  todo_pkey = 'todo_pkey',
}

/** update columns of table "todos" */
export enum todos_update_column {
  /** column name */
  completedAt = 'completedAt',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  user_id = 'user_id',
}

/** unique or primary key constraints on table "users" */
export enum users_constraint {
  /** unique or primary key constraint */
  user_pkey = 'user_pkey',
}

/** update columns of table "users" */
export enum users_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at',
}

/** subscription root */
export interface subscription_root {
  /** perform the action: "me" */
  me: Me | null
  /** fetch data from the table: "todos" */
  todos: todos[]
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: todos_aggregate
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: todos | null
  /** fetch data from the table: "users" */
  users: users[]
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: users_aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: users | null
  __typename: 'subscription_root'
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float = number

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

export type json = any

/** query root */
export interface query_rootRequest {
  /** perform the action: "me" */
  me?: MeRequest
  /** fetch data from the table: "todos" */
  todos?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todosRequest,
      ]
    | todosRequest
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todos_aggregateRequest,
      ]
    | todos_aggregateRequest
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: [{ id: uuid }, todosRequest]
  /** fetch data from the table: "users" */
  users?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        usersRequest,
      ]
    | usersRequest
  /** fetch aggregated fields from the table: "users" */
  users_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        users_aggregateRequest,
      ]
    | users_aggregateRequest
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: [{ id: uuid }, usersRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface MeRequest {
  name?: boolean | number
  role?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** ordering options when selecting data from "todos" */
export interface todos_order_by {
  completedAt?: order_by | null
  created_at?: order_by | null
  id?: order_by | null
  title?: order_by | null
  updated_at?: order_by | null
  user?: users_order_by | null
  user_id?: order_by | null
}

/** ordering options when selecting data from "users" */
export interface users_order_by {
  created_at?: order_by | null
  id?: order_by | null
  name?: order_by | null
  todos_aggregate?: todos_aggregate_order_by | null
  updated_at?: order_by | null
}

/** order by aggregate values of table "todos" */
export interface todos_aggregate_order_by {
  count?: order_by | null
  max?: todos_max_order_by | null
  min?: todos_min_order_by | null
}

/** order by max() on columns of table "todos" */
export interface todos_max_order_by {
  completedAt?: order_by | null
  created_at?: order_by | null
  id?: order_by | null
  title?: order_by | null
  updated_at?: order_by | null
  user_id?: order_by | null
}

/** order by min() on columns of table "todos" */
export interface todos_min_order_by {
  completedAt?: order_by | null
  created_at?: order_by | null
  id?: order_by | null
  title?: order_by | null
  updated_at?: order_by | null
  user_id?: order_by | null
}

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export interface todos_bool_exp {
  _and?: (todos_bool_exp | null)[] | null
  _not?: todos_bool_exp | null
  _or?: (todos_bool_exp | null)[] | null
  completedAt?: timetz_comparison_exp | null
  created_at?: timestamptz_comparison_exp | null
  id?: uuid_comparison_exp | null
  title?: String_comparison_exp | null
  updated_at?: timestamptz_comparison_exp | null
  user?: users_bool_exp | null
  user_id?: uuid_comparison_exp | null
}

/** expression to compare columns of type timetz. All fields are combined with logical 'AND'. */
export interface timetz_comparison_exp {
  _eq?: timetz | null
  _gt?: timetz | null
  _gte?: timetz | null
  _in?: timetz[] | null
  _is_null?: Boolean | null
  _lt?: timetz | null
  _lte?: timetz | null
  _neq?: timetz | null
  _nin?: timetz[] | null
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: timestamptz | null
  _gt?: timestamptz | null
  _gte?: timestamptz | null
  _in?: timestamptz[] | null
  _is_null?: Boolean | null
  _lt?: timestamptz | null
  _lte?: timestamptz | null
  _neq?: timestamptz | null
  _nin?: timestamptz[] | null
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: uuid | null
  _gt?: uuid | null
  _gte?: uuid | null
  _in?: uuid[] | null
  _is_null?: Boolean | null
  _lt?: uuid | null
  _lte?: uuid | null
  _neq?: uuid | null
  _nin?: uuid[] | null
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: String | null
  _gt?: String | null
  _gte?: String | null
  _ilike?: String | null
  _in?: String[] | null
  _is_null?: Boolean | null
  _like?: String | null
  _lt?: String | null
  _lte?: String | null
  _neq?: String | null
  _nilike?: String | null
  _nin?: String[] | null
  _nlike?: String | null
  _nsimilar?: String | null
  _similar?: String | null
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {
  _and?: (users_bool_exp | null)[] | null
  _not?: users_bool_exp | null
  _or?: (users_bool_exp | null)[] | null
  created_at?: timestamptz_comparison_exp | null
  id?: uuid_comparison_exp | null
  name?: String_comparison_exp | null
  todos?: todos_bool_exp | null
  updated_at?: timestamptz_comparison_exp | null
}

/** columns and relationships of "todos" */
export interface todosRequest {
  completedAt?: boolean | number
  created_at?: boolean | number
  id?: boolean | number
  title?: boolean | number
  updated_at?: boolean | number
  /** An object relationship */
  user?: usersRequest
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** columns and relationships of "users" */
export interface usersRequest {
  created_at?: boolean | number
  id?: boolean | number
  name?: boolean | number
  /** An array relationship */
  todos?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todosRequest,
      ]
    | todosRequest
  /** An aggregated array relationship */
  todos_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todos_aggregateRequest,
      ]
    | todos_aggregateRequest
  updated_at?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "todos" */
export interface todos_aggregateRequest {
  aggregate?: todos_aggregate_fieldsRequest
  nodes?: todosRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "todos" */
export interface todos_aggregate_fieldsRequest {
  count?: [{ columns?: todos_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: todos_max_fieldsRequest
  min?: todos_min_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface todos_max_fieldsRequest {
  completedAt?: boolean | number
  created_at?: boolean | number
  id?: boolean | number
  title?: boolean | number
  updated_at?: boolean | number
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface todos_min_fieldsRequest {
  completedAt?: boolean | number
  created_at?: boolean | number
  id?: boolean | number
  title?: boolean | number
  updated_at?: boolean | number
  user_id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "users" */
export interface users_aggregateRequest {
  aggregate?: users_aggregate_fieldsRequest
  nodes?: usersRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsRequest {
  count?: [{ columns?: users_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: users_max_fieldsRequest
  min?: users_min_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface users_max_fieldsRequest {
  created_at?: boolean | number
  id?: boolean | number
  name?: boolean | number
  updated_at?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface users_min_fieldsRequest {
  created_at?: boolean | number
  id?: boolean | number
  name?: boolean | number
  updated_at?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** mutation root */
export interface mutation_rootRequest {
  /** delete data from the table: "todos" */
  delete_todos?: [
    {
      /** filter the rows which have to be deleted */
      where: todos_bool_exp
    },
    todos_mutation_responseRequest,
  ]
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: [{ id: uuid }, todosRequest]
  /** delete data from the table: "users" */
  delete_users?: [
    {
      /** filter the rows which have to be deleted */
      where: users_bool_exp
    },
    users_mutation_responseRequest,
  ]
  /** delete single row from the table: "users" */
  delete_users_by_pk?: [{ id: uuid }, usersRequest]
  /** insert data into the table: "todos" */
  insert_todos?: [
    {
      /** the rows to be inserted */
      objects: todos_insert_input[]
      /** on conflict condition */
      on_conflict?: todos_on_conflict | null
    },
    todos_mutation_responseRequest,
  ]
  /** insert a single row into the table: "todos" */
  insert_todos_one?: [
    {
      /** the row to be inserted */
      object: todos_insert_input
      /** on conflict condition */
      on_conflict?: todos_on_conflict | null
    },
    todosRequest,
  ]
  /** insert data into the table: "users" */
  insert_users?: [
    {
      /** the rows to be inserted */
      objects: users_insert_input[]
      /** on conflict condition */
      on_conflict?: users_on_conflict | null
    },
    users_mutation_responseRequest,
  ]
  /** insert a single row into the table: "users" */
  insert_users_one?: [
    {
      /** the row to be inserted */
      object: users_insert_input
      /** on conflict condition */
      on_conflict?: users_on_conflict | null
    },
    usersRequest,
  ]
  /** update data of the table: "todos" */
  update_todos?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: todos_set_input | null
      /** filter the rows which have to be updated */
      where: todos_bool_exp
    },
    todos_mutation_responseRequest,
  ]
  /** update single row of the table: "todos" */
  update_todos_by_pk?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: todos_set_input | null
      pk_columns: todos_pk_columns_input
    },
    todosRequest,
  ]
  /** update data of the table: "users" */
  update_users?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: users_set_input | null
      /** filter the rows which have to be updated */
      where: users_bool_exp
    },
    users_mutation_responseRequest,
  ]
  /** update single row of the table: "users" */
  update_users_by_pk?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: users_set_input | null
      pk_columns: users_pk_columns_input
    },
    usersRequest,
  ]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "todos" */
export interface todos_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: todosRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** response of any mutation on the table "users" */
export interface users_mutation_responseRequest {
  /** number of affected rows by the mutation */
  affected_rows?: boolean | number
  /** data of the affected rows by the mutation */
  returning?: usersRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** input type for inserting data into table "todos" */
export interface todos_insert_input {
  completedAt?: timetz | null
  created_at?: timestamptz | null
  id?: uuid | null
  title?: String | null
  updated_at?: timestamptz | null
  user?: users_obj_rel_insert_input | null
  user_id?: uuid | null
}

/** input type for inserting object relation for remote table "users" */
export interface users_obj_rel_insert_input {
  data: users_insert_input
  on_conflict?: users_on_conflict | null
}

/** input type for inserting data into table "users" */
export interface users_insert_input {
  created_at?: timestamptz | null
  id?: uuid | null
  name?: String | null
  todos?: todos_arr_rel_insert_input | null
  updated_at?: timestamptz | null
}

/** input type for inserting array relation for remote table "todos" */
export interface todos_arr_rel_insert_input {
  data: todos_insert_input[]
  on_conflict?: todos_on_conflict | null
}

/** on conflict condition type for table "todos" */
export interface todos_on_conflict {
  constraint: todos_constraint
  update_columns: todos_update_column[]
  where?: todos_bool_exp | null
}

/** on conflict condition type for table "users" */
export interface users_on_conflict {
  constraint: users_constraint
  update_columns: users_update_column[]
  where?: users_bool_exp | null
}

/** input type for updating data in table "todos" */
export interface todos_set_input {
  completedAt?: timetz | null
  created_at?: timestamptz | null
  id?: uuid | null
  title?: String | null
  updated_at?: timestamptz | null
  user_id?: uuid | null
}

/** primary key columns input for table: "todos" */
export interface todos_pk_columns_input {
  id: uuid
}

/** input type for updating data in table "users" */
export interface users_set_input {
  created_at?: timestamptz | null
  id?: uuid | null
  name?: String | null
  updated_at?: timestamptz | null
}

/** primary key columns input for table: "users" */
export interface users_pk_columns_input {
  id: uuid
}

/** subscription root */
export interface subscription_rootRequest {
  /** perform the action: "me" */
  me?: MeRequest
  /** fetch data from the table: "todos" */
  todos?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todosRequest,
      ]
    | todosRequest
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: todos_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: todos_order_by[] | null
          /** filter the rows returned */
          where?: todos_bool_exp | null
        },
        todos_aggregateRequest,
      ]
    | todos_aggregateRequest
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: [{ id: uuid }, todosRequest]
  /** fetch data from the table: "users" */
  users?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        usersRequest,
      ]
    | usersRequest
  /** fetch aggregated fields from the table: "users" */
  users_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: users_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: users_order_by[] | null
          /** filter the rows returned */
          where?: users_bool_exp | null
        },
        users_aggregateRequest,
      ]
    | users_aggregateRequest
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: [{ id: uuid }, usersRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export interface json_comparison_exp {
  _eq?: json | null
  _gt?: json | null
  _gte?: json | null
  _in?: json[] | null
  _is_null?: Boolean | null
  _lt?: json | null
  _lte?: json | null
  _neq?: json | null
  _nin?: json[] | null
}

/** input type for inserting object relation for remote table "todos" */
export interface todos_obj_rel_insert_input {
  data: todos_insert_input
  on_conflict?: todos_on_conflict | null
}

/** order by aggregate values of table "users" */
export interface users_aggregate_order_by {
  count?: order_by | null
  max?: users_max_order_by | null
  min?: users_min_order_by | null
}

/** order by max() on columns of table "users" */
export interface users_max_order_by {
  created_at?: order_by | null
  id?: order_by | null
  name?: order_by | null
  updated_at?: order_by | null
}

/** order by min() on columns of table "users" */
export interface users_min_order_by {
  created_at?: order_by | null
  id?: order_by | null
  name?: order_by | null
  updated_at?: order_by | null
}

/** input type for inserting array relation for remote table "users" */
export interface users_arr_rel_insert_input {
  data: users_insert_input[]
  on_conflict?: users_on_conflict | null
}

const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj: { __typename: String }): obj is query_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return query_root_possibleTypes.includes(obj.__typename)
}

const Me_possibleTypes = ['Me']
export const isMe = (obj: { __typename: String }): obj is Me => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Me_possibleTypes.includes(obj.__typename)
}

const todos_possibleTypes = ['todos']
export const istodos = (obj: { __typename: String }): obj is todos => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_possibleTypes.includes(obj.__typename)
}

const users_possibleTypes = ['users']
export const isusers = (obj: { __typename: String }): obj is users => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_possibleTypes.includes(obj.__typename)
}

const todos_aggregate_possibleTypes = ['todos_aggregate']
export const istodos_aggregate = (obj: { __typename: String }): obj is todos_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_aggregate_possibleTypes.includes(obj.__typename)
}

const todos_aggregate_fields_possibleTypes = ['todos_aggregate_fields']
export const istodos_aggregate_fields = (obj: { __typename: String }): obj is todos_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const todos_max_fields_possibleTypes = ['todos_max_fields']
export const istodos_max_fields = (obj: { __typename: String }): obj is todos_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_max_fields_possibleTypes.includes(obj.__typename)
}

const todos_min_fields_possibleTypes = ['todos_min_fields']
export const istodos_min_fields = (obj: { __typename: String }): obj is todos_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_min_fields_possibleTypes.includes(obj.__typename)
}

const users_aggregate_possibleTypes = ['users_aggregate']
export const isusers_aggregate = (obj: { __typename: String }): obj is users_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_aggregate_possibleTypes.includes(obj.__typename)
}

const users_aggregate_fields_possibleTypes = ['users_aggregate_fields']
export const isusers_aggregate_fields = (obj: { __typename: String }): obj is users_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const users_max_fields_possibleTypes = ['users_max_fields']
export const isusers_max_fields = (obj: { __typename: String }): obj is users_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_max_fields_possibleTypes.includes(obj.__typename)
}

const users_min_fields_possibleTypes = ['users_min_fields']
export const isusers_min_fields = (obj: { __typename: String }): obj is users_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_min_fields_possibleTypes.includes(obj.__typename)
}

const mutation_root_possibleTypes = ['mutation_root']
export const ismutation_root = (obj: { __typename: String }): obj is mutation_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return mutation_root_possibleTypes.includes(obj.__typename)
}

const todos_mutation_response_possibleTypes = ['todos_mutation_response']
export const istodos_mutation_response = (obj: { __typename: String }): obj is todos_mutation_response => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return todos_mutation_response_possibleTypes.includes(obj.__typename)
}

const users_mutation_response_possibleTypes = ['users_mutation_response']
export const isusers_mutation_response = (obj: { __typename: String }): obj is users_mutation_response => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return users_mutation_response_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj: { __typename: String }): obj is subscription_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return subscription_root_possibleTypes.includes(obj.__typename)
}

/** query root */
export interface query_rootPromiseChain {
  /** perform the action: "me" */
  me: MePromiseChain & { execute: (request: MeRequest, defaultValue?: Me | null) => Promise<Me | null> }
  /** fetch data from the table: "todos" */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]>
  }
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregatePromiseChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
  }) &
    (todos_aggregatePromiseChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
    })
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: (args: {
    id: uuid
  }) => todosPromiseChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Promise<todos | null> }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }) & {
    execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]>
  }
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregatePromiseChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
  }) &
    (users_aggregatePromiseChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    id: uuid
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
}

/** query root */
export interface query_rootObservableChain {
  /** perform the action: "me" */
  me: MeObservableChain & { execute: (request: MeRequest, defaultValue?: Me | null) => Observable<Me | null> }
  /** fetch data from the table: "todos" */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]>
  }
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregateObservableChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
  }) &
    (todos_aggregateObservableChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
    })
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: (args: {
    id: uuid
  }) => todosObservableChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Observable<todos | null> }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }) & {
    execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]>
  }
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregateObservableChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
  }) &
    (users_aggregateObservableChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    id: uuid
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
}

export interface MePromiseChain {
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  role: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface MeObservableChain {
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  role: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

/** columns and relationships of "todos" */
export interface todosPromiseChain {
  completedAt: { execute: (request?: boolean | number, defaultValue?: timetz | null) => Promise<timetz | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid) => Promise<uuid> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  /** An object relationship */
  user: usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: uuid) => Promise<uuid> }
}

/** columns and relationships of "todos" */
export interface todosObservableChain {
  completedAt: { execute: (request?: boolean | number, defaultValue?: timetz | null) => Observable<timetz | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid) => Observable<uuid> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  /** An object relationship */
  user: usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: uuid) => Observable<uuid> }
}

/** columns and relationships of "users" */
export interface usersPromiseChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid) => Promise<uuid> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  /** An array relationship */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]>
  }
  /** An aggregated array relationship */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregatePromiseChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
  }) &
    (todos_aggregatePromiseChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
    })
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
}

/** columns and relationships of "users" */
export interface usersObservableChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid) => Observable<uuid> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  /** An array relationship */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]>
  }
  /** An aggregated array relationship */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregateObservableChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
  }) &
    (todos_aggregateObservableChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
    })
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
}

/** aggregated selection of "todos" */
export interface todos_aggregatePromiseChain {
  aggregate: todos_aggregate_fieldsPromiseChain & {
    execute: (
      request: todos_aggregate_fieldsRequest,
      defaultValue?: todos_aggregate_fields | null,
    ) => Promise<todos_aggregate_fields | null>
  }
  nodes: { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }
}

/** aggregated selection of "todos" */
export interface todos_aggregateObservableChain {
  aggregate: todos_aggregate_fieldsObservableChain & {
    execute: (
      request: todos_aggregate_fieldsRequest,
      defaultValue?: todos_aggregate_fields | null,
    ) => Observable<todos_aggregate_fields | null>
  }
  nodes: { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }
}

/** aggregate fields of "todos" */
export interface todos_aggregate_fieldsPromiseChain {
  count: ((args?: {
    columns?: todos_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) & {
    execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null>
  }
  max: todos_max_fieldsPromiseChain & {
    execute: (request: todos_max_fieldsRequest, defaultValue?: todos_max_fields | null) => Promise<todos_max_fields | null>
  }
  min: todos_min_fieldsPromiseChain & {
    execute: (request: todos_min_fieldsRequest, defaultValue?: todos_min_fields | null) => Promise<todos_min_fields | null>
  }
}

/** aggregate fields of "todos" */
export interface todos_aggregate_fieldsObservableChain {
  count: ((args?: {
    columns?: todos_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) & {
    execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null>
  }
  max: todos_max_fieldsObservableChain & {
    execute: (
      request: todos_max_fieldsRequest,
      defaultValue?: todos_max_fields | null,
    ) => Observable<todos_max_fields | null>
  }
  min: todos_min_fieldsObservableChain & {
    execute: (
      request: todos_min_fieldsRequest,
      defaultValue?: todos_min_fields | null,
    ) => Observable<todos_min_fields | null>
  }
}

/** aggregate max on columns */
export interface todos_max_fieldsPromiseChain {
  completedAt: { execute: (request?: boolean | number, defaultValue?: timetz | null) => Promise<timetz | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Promise<uuid | null> }
  title: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Promise<uuid | null> }
}

/** aggregate max on columns */
export interface todos_max_fieldsObservableChain {
  completedAt: { execute: (request?: boolean | number, defaultValue?: timetz | null) => Observable<timetz | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Observable<uuid | null> }
  title: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Observable<uuid | null> }
}

/** aggregate min on columns */
export interface todos_min_fieldsPromiseChain {
  completedAt: { execute: (request?: boolean | number, defaultValue?: timetz | null) => Promise<timetz | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Promise<uuid | null> }
  title: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Promise<uuid | null> }
}

/** aggregate min on columns */
export interface todos_min_fieldsObservableChain {
  completedAt: { execute: (request?: boolean | number, defaultValue?: timetz | null) => Observable<timetz | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Observable<uuid | null> }
  title: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  user_id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Observable<uuid | null> }
}

/** aggregated selection of "users" */
export interface users_aggregatePromiseChain {
  aggregate: users_aggregate_fieldsPromiseChain & {
    execute: (
      request: users_aggregate_fieldsRequest,
      defaultValue?: users_aggregate_fields | null,
    ) => Promise<users_aggregate_fields | null>
  }
  nodes: { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }
}

/** aggregated selection of "users" */
export interface users_aggregateObservableChain {
  aggregate: users_aggregate_fieldsObservableChain & {
    execute: (
      request: users_aggregate_fieldsRequest,
      defaultValue?: users_aggregate_fields | null,
    ) => Observable<users_aggregate_fields | null>
  }
  nodes: { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsPromiseChain {
  count: ((args?: {
    columns?: users_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }) & {
    execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null>
  }
  max: users_max_fieldsPromiseChain & {
    execute: (request: users_max_fieldsRequest, defaultValue?: users_max_fields | null) => Promise<users_max_fields | null>
  }
  min: users_min_fieldsPromiseChain & {
    execute: (request: users_min_fieldsRequest, defaultValue?: users_min_fields | null) => Promise<users_min_fields | null>
  }
}

/** aggregate fields of "users" */
export interface users_aggregate_fieldsObservableChain {
  count: ((args?: {
    columns?: users_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }) & {
    execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null>
  }
  max: users_max_fieldsObservableChain & {
    execute: (
      request: users_max_fieldsRequest,
      defaultValue?: users_max_fields | null,
    ) => Observable<users_max_fields | null>
  }
  min: users_min_fieldsObservableChain & {
    execute: (
      request: users_min_fieldsRequest,
      defaultValue?: users_min_fields | null,
    ) => Observable<users_min_fields | null>
  }
}

/** aggregate max on columns */
export interface users_max_fieldsPromiseChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Promise<uuid | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
}

/** aggregate max on columns */
export interface users_max_fieldsObservableChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Observable<uuid | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
}

/** aggregate min on columns */
export interface users_min_fieldsPromiseChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Promise<uuid | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Promise<timestamptz | null> }
}

/** aggregate min on columns */
export interface users_min_fieldsObservableChain {
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
  id: { execute: (request?: boolean | number, defaultValue?: uuid | null) => Observable<uuid | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamptz | null) => Observable<timestamptz | null> }
}

/** mutation root */
export interface mutation_rootPromiseChain {
  /** delete data from the table: "todos" */
  delete_todos: (args: {
    /** filter the rows which have to be deleted */
    where: todos_bool_exp
  }) => todos_mutation_responsePromiseChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Promise<todos_mutation_response | null>
  }
  /** delete single row from the table: "todos" */
  delete_todos_by_pk: (args: {
    id: uuid
  }) => todosPromiseChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Promise<todos | null> }
  /** delete data from the table: "users" */
  delete_users: (args: {
    /** filter the rows which have to be deleted */
    where: users_bool_exp
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
  /** delete single row from the table: "users" */
  delete_users_by_pk: (args: {
    id: uuid
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
  /** insert data into the table: "todos" */
  insert_todos: (args: {
    /** the rows to be inserted */
    objects: todos_insert_input[]
    /** on conflict condition */
    on_conflict?: todos_on_conflict | null
  }) => todos_mutation_responsePromiseChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Promise<todos_mutation_response | null>
  }
  /** insert a single row into the table: "todos" */
  insert_todos_one: (args: {
    /** the row to be inserted */
    object: todos_insert_input
    /** on conflict condition */
    on_conflict?: todos_on_conflict | null
  }) => todosPromiseChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Promise<todos | null> }
  /** insert data into the table: "users" */
  insert_users: (args: {
    /** the rows to be inserted */
    objects: users_insert_input[]
    /** on conflict condition */
    on_conflict?: users_on_conflict | null
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
  /** insert a single row into the table: "users" */
  insert_users_one: (args: {
    /** the row to be inserted */
    object: users_insert_input
    /** on conflict condition */
    on_conflict?: users_on_conflict | null
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
  /** update data of the table: "todos" */
  update_todos: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: todos_set_input | null
    /** filter the rows which have to be updated */
    where: todos_bool_exp
  }) => todos_mutation_responsePromiseChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Promise<todos_mutation_response | null>
  }
  /** update single row of the table: "todos" */
  update_todos_by_pk: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: todos_set_input | null
    pk_columns: todos_pk_columns_input
  }) => todosPromiseChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Promise<todos | null> }
  /** update data of the table: "users" */
  update_users: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: users_set_input | null
    /** filter the rows which have to be updated */
    where: users_bool_exp
  }) => users_mutation_responsePromiseChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Promise<users_mutation_response | null>
  }
  /** update single row of the table: "users" */
  update_users_by_pk: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: users_set_input | null
    pk_columns: users_pk_columns_input
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
}

/** mutation root */
export interface mutation_rootObservableChain {
  /** delete data from the table: "todos" */
  delete_todos: (args: {
    /** filter the rows which have to be deleted */
    where: todos_bool_exp
  }) => todos_mutation_responseObservableChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Observable<todos_mutation_response | null>
  }
  /** delete single row from the table: "todos" */
  delete_todos_by_pk: (args: {
    id: uuid
  }) => todosObservableChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Observable<todos | null> }
  /** delete data from the table: "users" */
  delete_users: (args: {
    /** filter the rows which have to be deleted */
    where: users_bool_exp
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
  /** delete single row from the table: "users" */
  delete_users_by_pk: (args: {
    id: uuid
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
  /** insert data into the table: "todos" */
  insert_todos: (args: {
    /** the rows to be inserted */
    objects: todos_insert_input[]
    /** on conflict condition */
    on_conflict?: todos_on_conflict | null
  }) => todos_mutation_responseObservableChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Observable<todos_mutation_response | null>
  }
  /** insert a single row into the table: "todos" */
  insert_todos_one: (args: {
    /** the row to be inserted */
    object: todos_insert_input
    /** on conflict condition */
    on_conflict?: todos_on_conflict | null
  }) => todosObservableChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Observable<todos | null> }
  /** insert data into the table: "users" */
  insert_users: (args: {
    /** the rows to be inserted */
    objects: users_insert_input[]
    /** on conflict condition */
    on_conflict?: users_on_conflict | null
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
  /** insert a single row into the table: "users" */
  insert_users_one: (args: {
    /** the row to be inserted */
    object: users_insert_input
    /** on conflict condition */
    on_conflict?: users_on_conflict | null
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
  /** update data of the table: "todos" */
  update_todos: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: todos_set_input | null
    /** filter the rows which have to be updated */
    where: todos_bool_exp
  }) => todos_mutation_responseObservableChain & {
    execute: (
      request: todos_mutation_responseRequest,
      defaultValue?: todos_mutation_response | null,
    ) => Observable<todos_mutation_response | null>
  }
  /** update single row of the table: "todos" */
  update_todos_by_pk: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: todos_set_input | null
    pk_columns: todos_pk_columns_input
  }) => todosObservableChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Observable<todos | null> }
  /** update data of the table: "users" */
  update_users: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: users_set_input | null
    /** filter the rows which have to be updated */
    where: users_bool_exp
  }) => users_mutation_responseObservableChain & {
    execute: (
      request: users_mutation_responseRequest,
      defaultValue?: users_mutation_response | null,
    ) => Observable<users_mutation_response | null>
  }
  /** update single row of the table: "users" */
  update_users_by_pk: (args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: users_set_input | null
    pk_columns: users_pk_columns_input
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
}

/** response of any mutation on the table "todos" */
export interface todos_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }
}

/** response of any mutation on the table "todos" */
export interface todos_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }
}

/** response of any mutation on the table "users" */
export interface users_mutation_responsePromiseChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }
}

/** response of any mutation on the table "users" */
export interface users_mutation_responseObservableChain {
  /** number of affected rows by the mutation */
  affected_rows: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** data of the affected rows by the mutation */
  returning: { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }
}

/** subscription root */
export interface subscription_rootPromiseChain {
  /** perform the action: "me" */
  me: MePromiseChain & { execute: (request: MeRequest, defaultValue?: Me | null) => Promise<Me | null> }
  /** fetch data from the table: "todos" */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Promise<todos[]>
  }
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregatePromiseChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
  }) &
    (todos_aggregatePromiseChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Promise<todos_aggregate>
    })
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: (args: {
    id: uuid
  }) => todosPromiseChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Promise<todos | null> }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]> }) & {
    execute: (request: usersRequest, defaultValue?: users[]) => Promise<users[]>
  }
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregatePromiseChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
  }) &
    (users_aggregatePromiseChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Promise<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    id: uuid
  }) => usersPromiseChain & { execute: (request: usersRequest, defaultValue?: users | null) => Promise<users | null> }
}

/** subscription root */
export interface subscription_rootObservableChain {
  /** perform the action: "me" */
  me: MeObservableChain & { execute: (request: MeRequest, defaultValue?: Me | null) => Observable<Me | null> }
  /** fetch data from the table: "todos" */
  todos: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => { execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]> }) & {
    execute: (request: todosRequest, defaultValue?: todos[]) => Observable<todos[]>
  }
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: todos_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: todos_order_by[] | null
    /** filter the rows returned */
    where?: todos_bool_exp | null
  }) => todos_aggregateObservableChain & {
    execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
  }) &
    (todos_aggregateObservableChain & {
      execute: (request: todos_aggregateRequest, defaultValue?: todos_aggregate) => Observable<todos_aggregate>
    })
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: (args: {
    id: uuid
  }) => todosObservableChain & { execute: (request: todosRequest, defaultValue?: todos | null) => Observable<todos | null> }
  /** fetch data from the table: "users" */
  users: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => { execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]> }) & {
    execute: (request: usersRequest, defaultValue?: users[]) => Observable<users[]>
  }
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: users_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: users_order_by[] | null
    /** filter the rows returned */
    where?: users_bool_exp | null
  }) => users_aggregateObservableChain & {
    execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
  }) &
    (users_aggregateObservableChain & {
      execute: (request: users_aggregateRequest, defaultValue?: users_aggregate) => Observable<users_aggregate>
    })
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: (args: {
    id: uuid
  }) => usersObservableChain & { execute: (request: usersRequest, defaultValue?: users | null) => Observable<users | null> }
}
