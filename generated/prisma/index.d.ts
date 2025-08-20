
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Investimento
 * 
 */
export type Investimento = $Result.DefaultSelection<Prisma.$InvestimentoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Investimentos
 * const investimentos = await prisma.investimento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Investimentos
   * const investimentos = await prisma.investimento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.investimento`: Exposes CRUD operations for the **Investimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investimentos
    * const investimentos = await prisma.investimento.findMany()
    * ```
    */
  get investimento(): Prisma.InvestimentoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Investimento: 'Investimento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "investimento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Investimento: {
        payload: Prisma.$InvestimentoPayload<ExtArgs>
        fields: Prisma.InvestimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          findFirst: {
            args: Prisma.InvestimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          findMany: {
            args: Prisma.InvestimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>[]
          }
          create: {
            args: Prisma.InvestimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          createMany: {
            args: Prisma.InvestimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvestimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          update: {
            args: Prisma.InvestimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          deleteMany: {
            args: Prisma.InvestimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvestimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          aggregate: {
            args: Prisma.InvestimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestimento>
          }
          groupBy: {
            args: Prisma.InvestimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestimentoCountArgs<ExtArgs>
            result: $Utils.Optional<InvestimentoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    investimento?: InvestimentoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Investimento
   */

  export type AggregateInvestimento = {
    _count: InvestimentoCountAggregateOutputType | null
    _avg: InvestimentoAvgAggregateOutputType | null
    _sum: InvestimentoSumAggregateOutputType | null
    _min: InvestimentoMinAggregateOutputType | null
    _max: InvestimentoMaxAggregateOutputType | null
  }

  export type InvestimentoAvgAggregateOutputType = {
    id: number | null
    valor: number | null
  }

  export type InvestimentoSumAggregateOutputType = {
    id: number | null
    valor: number | null
  }

  export type InvestimentoMinAggregateOutputType = {
    id: number | null
    nome_investimento: string | null
    tipo_investimento: string | null
    valor: number | null
    data_investimento: Date | null
  }

  export type InvestimentoMaxAggregateOutputType = {
    id: number | null
    nome_investimento: string | null
    tipo_investimento: string | null
    valor: number | null
    data_investimento: Date | null
  }

  export type InvestimentoCountAggregateOutputType = {
    id: number
    nome_investimento: number
    tipo_investimento: number
    valor: number
    data_investimento: number
    _all: number
  }


  export type InvestimentoAvgAggregateInputType = {
    id?: true
    valor?: true
  }

  export type InvestimentoSumAggregateInputType = {
    id?: true
    valor?: true
  }

  export type InvestimentoMinAggregateInputType = {
    id?: true
    nome_investimento?: true
    tipo_investimento?: true
    valor?: true
    data_investimento?: true
  }

  export type InvestimentoMaxAggregateInputType = {
    id?: true
    nome_investimento?: true
    tipo_investimento?: true
    valor?: true
    data_investimento?: true
  }

  export type InvestimentoCountAggregateInputType = {
    id?: true
    nome_investimento?: true
    tipo_investimento?: true
    valor?: true
    data_investimento?: true
    _all?: true
  }

  export type InvestimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investimento to aggregate.
     */
    where?: InvestimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investimentos to fetch.
     */
    orderBy?: InvestimentoOrderByWithRelationInput | InvestimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investimentos
    **/
    _count?: true | InvestimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestimentoMaxAggregateInputType
  }

  export type GetInvestimentoAggregateType<T extends InvestimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestimento[P]>
      : GetScalarType<T[P], AggregateInvestimento[P]>
  }




  export type InvestimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestimentoWhereInput
    orderBy?: InvestimentoOrderByWithAggregationInput | InvestimentoOrderByWithAggregationInput[]
    by: InvestimentoScalarFieldEnum[] | InvestimentoScalarFieldEnum
    having?: InvestimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestimentoCountAggregateInputType | true
    _avg?: InvestimentoAvgAggregateInputType
    _sum?: InvestimentoSumAggregateInputType
    _min?: InvestimentoMinAggregateInputType
    _max?: InvestimentoMaxAggregateInputType
  }

  export type InvestimentoGroupByOutputType = {
    id: number
    nome_investimento: string
    tipo_investimento: string
    valor: number
    data_investimento: Date
    _count: InvestimentoCountAggregateOutputType | null
    _avg: InvestimentoAvgAggregateOutputType | null
    _sum: InvestimentoSumAggregateOutputType | null
    _min: InvestimentoMinAggregateOutputType | null
    _max: InvestimentoMaxAggregateOutputType | null
  }

  type GetInvestimentoGroupByPayload<T extends InvestimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestimentoGroupByOutputType[P]>
            : GetScalarType<T[P], InvestimentoGroupByOutputType[P]>
        }
      >
    >


  export type InvestimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_investimento?: boolean
    tipo_investimento?: boolean
    valor?: boolean
    data_investimento?: boolean
  }, ExtArgs["result"]["investimento"]>



  export type InvestimentoSelectScalar = {
    id?: boolean
    nome_investimento?: boolean
    tipo_investimento?: boolean
    valor?: boolean
    data_investimento?: boolean
  }

  export type InvestimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_investimento" | "tipo_investimento" | "valor" | "data_investimento", ExtArgs["result"]["investimento"]>

  export type $InvestimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investimento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_investimento: string
      tipo_investimento: string
      valor: number
      data_investimento: Date
    }, ExtArgs["result"]["investimento"]>
    composites: {}
  }

  type InvestimentoGetPayload<S extends boolean | null | undefined | InvestimentoDefaultArgs> = $Result.GetResult<Prisma.$InvestimentoPayload, S>

  type InvestimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestimentoCountAggregateInputType | true
    }

  export interface InvestimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investimento'], meta: { name: 'Investimento' } }
    /**
     * Find zero or one Investimento that matches the filter.
     * @param {InvestimentoFindUniqueArgs} args - Arguments to find a Investimento
     * @example
     * // Get one Investimento
     * const investimento = await prisma.investimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestimentoFindUniqueArgs>(args: SelectSubset<T, InvestimentoFindUniqueArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestimentoFindUniqueOrThrowArgs} args - Arguments to find a Investimento
     * @example
     * // Get one Investimento
     * const investimento = await prisma.investimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoFindFirstArgs} args - Arguments to find a Investimento
     * @example
     * // Get one Investimento
     * const investimento = await prisma.investimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestimentoFindFirstArgs>(args?: SelectSubset<T, InvestimentoFindFirstArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoFindFirstOrThrowArgs} args - Arguments to find a Investimento
     * @example
     * // Get one Investimento
     * const investimento = await prisma.investimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investimentos
     * const investimentos = await prisma.investimento.findMany()
     * 
     * // Get first 10 Investimentos
     * const investimentos = await prisma.investimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investimentoWithIdOnly = await prisma.investimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestimentoFindManyArgs>(args?: SelectSubset<T, InvestimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investimento.
     * @param {InvestimentoCreateArgs} args - Arguments to create a Investimento.
     * @example
     * // Create one Investimento
     * const Investimento = await prisma.investimento.create({
     *   data: {
     *     // ... data to create a Investimento
     *   }
     * })
     * 
     */
    create<T extends InvestimentoCreateArgs>(args: SelectSubset<T, InvestimentoCreateArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investimentos.
     * @param {InvestimentoCreateManyArgs} args - Arguments to create many Investimentos.
     * @example
     * // Create many Investimentos
     * const investimento = await prisma.investimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestimentoCreateManyArgs>(args?: SelectSubset<T, InvestimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Investimento.
     * @param {InvestimentoDeleteArgs} args - Arguments to delete one Investimento.
     * @example
     * // Delete one Investimento
     * const Investimento = await prisma.investimento.delete({
     *   where: {
     *     // ... filter to delete one Investimento
     *   }
     * })
     * 
     */
    delete<T extends InvestimentoDeleteArgs>(args: SelectSubset<T, InvestimentoDeleteArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investimento.
     * @param {InvestimentoUpdateArgs} args - Arguments to update one Investimento.
     * @example
     * // Update one Investimento
     * const investimento = await prisma.investimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestimentoUpdateArgs>(args: SelectSubset<T, InvestimentoUpdateArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investimentos.
     * @param {InvestimentoDeleteManyArgs} args - Arguments to filter Investimentos to delete.
     * @example
     * // Delete a few Investimentos
     * const { count } = await prisma.investimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestimentoDeleteManyArgs>(args?: SelectSubset<T, InvestimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investimentos
     * const investimento = await prisma.investimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestimentoUpdateManyArgs>(args: SelectSubset<T, InvestimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Investimento.
     * @param {InvestimentoUpsertArgs} args - Arguments to update or create a Investimento.
     * @example
     * // Update or create a Investimento
     * const investimento = await prisma.investimento.upsert({
     *   create: {
     *     // ... data to create a Investimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investimento we want to update
     *   }
     * })
     */
    upsert<T extends InvestimentoUpsertArgs>(args: SelectSubset<T, InvestimentoUpsertArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoCountArgs} args - Arguments to filter Investimentos to count.
     * @example
     * // Count the number of Investimentos
     * const count = await prisma.investimento.count({
     *   where: {
     *     // ... the filter for the Investimentos we want to count
     *   }
     * })
    **/
    count<T extends InvestimentoCountArgs>(
      args?: Subset<T, InvestimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestimentoAggregateArgs>(args: Subset<T, InvestimentoAggregateArgs>): Prisma.PrismaPromise<GetInvestimentoAggregateType<T>>

    /**
     * Group by Investimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestimentoGroupByArgs['orderBy'] }
        : { orderBy?: InvestimentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investimento model
   */
  readonly fields: InvestimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investimento model
   */
  interface InvestimentoFieldRefs {
    readonly id: FieldRef<"Investimento", 'Int'>
    readonly nome_investimento: FieldRef<"Investimento", 'String'>
    readonly tipo_investimento: FieldRef<"Investimento", 'String'>
    readonly valor: FieldRef<"Investimento", 'Float'>
    readonly data_investimento: FieldRef<"Investimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investimento findUnique
   */
  export type InvestimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * Filter, which Investimento to fetch.
     */
    where: InvestimentoWhereUniqueInput
  }

  /**
   * Investimento findUniqueOrThrow
   */
  export type InvestimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * Filter, which Investimento to fetch.
     */
    where: InvestimentoWhereUniqueInput
  }

  /**
   * Investimento findFirst
   */
  export type InvestimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * Filter, which Investimento to fetch.
     */
    where?: InvestimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investimentos to fetch.
     */
    orderBy?: InvestimentoOrderByWithRelationInput | InvestimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investimentos.
     */
    cursor?: InvestimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investimentos.
     */
    distinct?: InvestimentoScalarFieldEnum | InvestimentoScalarFieldEnum[]
  }

  /**
   * Investimento findFirstOrThrow
   */
  export type InvestimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * Filter, which Investimento to fetch.
     */
    where?: InvestimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investimentos to fetch.
     */
    orderBy?: InvestimentoOrderByWithRelationInput | InvestimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investimentos.
     */
    cursor?: InvestimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investimentos.
     */
    distinct?: InvestimentoScalarFieldEnum | InvestimentoScalarFieldEnum[]
  }

  /**
   * Investimento findMany
   */
  export type InvestimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * Filter, which Investimentos to fetch.
     */
    where?: InvestimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investimentos to fetch.
     */
    orderBy?: InvestimentoOrderByWithRelationInput | InvestimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investimentos.
     */
    cursor?: InvestimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investimentos.
     */
    skip?: number
    distinct?: InvestimentoScalarFieldEnum | InvestimentoScalarFieldEnum[]
  }

  /**
   * Investimento create
   */
  export type InvestimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * The data needed to create a Investimento.
     */
    data: XOR<InvestimentoCreateInput, InvestimentoUncheckedCreateInput>
  }

  /**
   * Investimento createMany
   */
  export type InvestimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investimentos.
     */
    data: InvestimentoCreateManyInput | InvestimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investimento update
   */
  export type InvestimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * The data needed to update a Investimento.
     */
    data: XOR<InvestimentoUpdateInput, InvestimentoUncheckedUpdateInput>
    /**
     * Choose, which Investimento to update.
     */
    where: InvestimentoWhereUniqueInput
  }

  /**
   * Investimento updateMany
   */
  export type InvestimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investimentos.
     */
    data: XOR<InvestimentoUpdateManyMutationInput, InvestimentoUncheckedUpdateManyInput>
    /**
     * Filter which Investimentos to update
     */
    where?: InvestimentoWhereInput
    /**
     * Limit how many Investimentos to update.
     */
    limit?: number
  }

  /**
   * Investimento upsert
   */
  export type InvestimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * The filter to search for the Investimento to update in case it exists.
     */
    where: InvestimentoWhereUniqueInput
    /**
     * In case the Investimento found by the `where` argument doesn't exist, create a new Investimento with this data.
     */
    create: XOR<InvestimentoCreateInput, InvestimentoUncheckedCreateInput>
    /**
     * In case the Investimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestimentoUpdateInput, InvestimentoUncheckedUpdateInput>
  }

  /**
   * Investimento delete
   */
  export type InvestimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
    /**
     * Filter which Investimento to delete.
     */
    where: InvestimentoWhereUniqueInput
  }

  /**
   * Investimento deleteMany
   */
  export type InvestimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investimentos to delete
     */
    where?: InvestimentoWhereInput
    /**
     * Limit how many Investimentos to delete.
     */
    limit?: number
  }

  /**
   * Investimento without action
   */
  export type InvestimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investimento
     */
    omit?: InvestimentoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InvestimentoScalarFieldEnum: {
    id: 'id',
    nome_investimento: 'nome_investimento',
    tipo_investimento: 'tipo_investimento',
    valor: 'valor',
    data_investimento: 'data_investimento'
  };

  export type InvestimentoScalarFieldEnum = (typeof InvestimentoScalarFieldEnum)[keyof typeof InvestimentoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const InvestimentoOrderByRelevanceFieldEnum: {
    nome_investimento: 'nome_investimento',
    tipo_investimento: 'tipo_investimento'
  };

  export type InvestimentoOrderByRelevanceFieldEnum = (typeof InvestimentoOrderByRelevanceFieldEnum)[keyof typeof InvestimentoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type InvestimentoWhereInput = {
    AND?: InvestimentoWhereInput | InvestimentoWhereInput[]
    OR?: InvestimentoWhereInput[]
    NOT?: InvestimentoWhereInput | InvestimentoWhereInput[]
    id?: IntFilter<"Investimento"> | number
    nome_investimento?: StringFilter<"Investimento"> | string
    tipo_investimento?: StringFilter<"Investimento"> | string
    valor?: FloatFilter<"Investimento"> | number
    data_investimento?: DateTimeFilter<"Investimento"> | Date | string
  }

  export type InvestimentoOrderByWithRelationInput = {
    id?: SortOrder
    nome_investimento?: SortOrder
    tipo_investimento?: SortOrder
    valor?: SortOrder
    data_investimento?: SortOrder
    _relevance?: InvestimentoOrderByRelevanceInput
  }

  export type InvestimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvestimentoWhereInput | InvestimentoWhereInput[]
    OR?: InvestimentoWhereInput[]
    NOT?: InvestimentoWhereInput | InvestimentoWhereInput[]
    nome_investimento?: StringFilter<"Investimento"> | string
    tipo_investimento?: StringFilter<"Investimento"> | string
    valor?: FloatFilter<"Investimento"> | number
    data_investimento?: DateTimeFilter<"Investimento"> | Date | string
  }, "id">

  export type InvestimentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome_investimento?: SortOrder
    tipo_investimento?: SortOrder
    valor?: SortOrder
    data_investimento?: SortOrder
    _count?: InvestimentoCountOrderByAggregateInput
    _avg?: InvestimentoAvgOrderByAggregateInput
    _max?: InvestimentoMaxOrderByAggregateInput
    _min?: InvestimentoMinOrderByAggregateInput
    _sum?: InvestimentoSumOrderByAggregateInput
  }

  export type InvestimentoScalarWhereWithAggregatesInput = {
    AND?: InvestimentoScalarWhereWithAggregatesInput | InvestimentoScalarWhereWithAggregatesInput[]
    OR?: InvestimentoScalarWhereWithAggregatesInput[]
    NOT?: InvestimentoScalarWhereWithAggregatesInput | InvestimentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Investimento"> | number
    nome_investimento?: StringWithAggregatesFilter<"Investimento"> | string
    tipo_investimento?: StringWithAggregatesFilter<"Investimento"> | string
    valor?: FloatWithAggregatesFilter<"Investimento"> | number
    data_investimento?: DateTimeWithAggregatesFilter<"Investimento"> | Date | string
  }

  export type InvestimentoCreateInput = {
    nome_investimento: string
    tipo_investimento: string
    valor: number
    data_investimento?: Date | string
  }

  export type InvestimentoUncheckedCreateInput = {
    id?: number
    nome_investimento: string
    tipo_investimento: string
    valor: number
    data_investimento?: Date | string
  }

  export type InvestimentoUpdateInput = {
    nome_investimento?: StringFieldUpdateOperationsInput | string
    tipo_investimento?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data_investimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestimentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_investimento?: StringFieldUpdateOperationsInput | string
    tipo_investimento?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data_investimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestimentoCreateManyInput = {
    id?: number
    nome_investimento: string
    tipo_investimento: string
    valor: number
    data_investimento?: Date | string
  }

  export type InvestimentoUpdateManyMutationInput = {
    nome_investimento?: StringFieldUpdateOperationsInput | string
    tipo_investimento?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data_investimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestimentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_investimento?: StringFieldUpdateOperationsInput | string
    tipo_investimento?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    data_investimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InvestimentoOrderByRelevanceInput = {
    fields: InvestimentoOrderByRelevanceFieldEnum | InvestimentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InvestimentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome_investimento?: SortOrder
    tipo_investimento?: SortOrder
    valor?: SortOrder
    data_investimento?: SortOrder
  }

  export type InvestimentoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type InvestimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_investimento?: SortOrder
    tipo_investimento?: SortOrder
    valor?: SortOrder
    data_investimento?: SortOrder
  }

  export type InvestimentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome_investimento?: SortOrder
    tipo_investimento?: SortOrder
    valor?: SortOrder
    data_investimento?: SortOrder
  }

  export type InvestimentoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}