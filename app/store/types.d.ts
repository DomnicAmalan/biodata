interface GeneticsSliceTypes {
  riskallloading: boolean,
  riskallerror?: any,
  riskalldata: riskDataType[]
}

interface riskDataType {
  deficient: number,
  description?: string,
  hazardId: number,
  hazardName: string,
  improved: number,
  optimal: number,
  risk: number,
  wildType: number,
  subHazards: SubHazardType[]
}

interface SubHazardType {
  deficient: number,
  improved: number,
  optimal: number,
  risk: number,
  wildType: number,
  subHazardId: number,
  subHazardName: string,
}

export type PromiseFn = (...args: any) => Promise<any>;
export type GetT<T> = T extends Promise<infer N> ? N : any;
export type GetFnResult<T extends PromiseFn> = GetT<ReturnType<T>>;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
