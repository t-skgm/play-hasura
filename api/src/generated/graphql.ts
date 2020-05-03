import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../types';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type Query = {
  user?: Maybe<User>;
  users: Array<User>;
  todo?: Maybe<Todo>;
  todos: Array<Todo>;
};


export type QueryUserArgs = {
  where: WhereUniqueInput;
};


export type QueryTodoArgs = {
  where: WhereUniqueInput;
};

export type Todo = {
  id: Scalars['ID'];
  title: Scalars['String'];
  completedAt?: Maybe<Scalars['DateTime']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type User = {
  id: Scalars['ID'];
  name: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  todos: Array<Todo>;
};

export type WhereUniqueInput = {
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  WhereUniqueInput: WhereUniqueInput,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  User: ResolverTypeWrapper<User>,
  String: ResolverTypeWrapper<Scalars['String']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Todo: ResolverTypeWrapper<Todo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  WhereUniqueInput: WhereUniqueInput,
  ID: Scalars['ID'],
  User: User,
  String: Scalars['String'],
  DateTime: Scalars['DateTime'],
  Todo: Todo,
  Boolean: Scalars['Boolean'],
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>,
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryTodoArgs, 'where'>>,
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>,
};

export type TodoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = Context> = {
  DateTime?: GraphQLScalarType,
  Query?: QueryResolvers<ContextType>,
  Todo?: TodoResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
