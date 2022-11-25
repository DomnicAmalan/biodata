interface GeneticsSliceTypes {
  riskallloading: boolean,
  riskallerror?: any,
  riskalldata: riskDataType[],
  subhazard?: RiskResponse | any,
  subhazardloading: boolean,
  subhazarderror?: any
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

export interface RiskSub {
  userId: number;
  geneticTestId: number;
  laboratoryName: string;
  alleleTypeName: string;
  alleleTypeId: number;
  alleleInTest: string;
  snpMarker: string;
  geneName: string;
  aminoAcid: string;
  hazardName: string;
  hazardId: number;
  hazardDescription: string;
  subHazardName: string;
  subHazardId: number;
  subHazardDescription: string;
  magnitude: number;
  snpInterpretationAlleleId: number;
  snpInterpretationId: number;
  narrative: string;
  isConflict: boolean;
}

export interface RiskResponse {
  risks: RiskSub[];
  subHazardId: number;
  subHazardName: string;
  subHazardDescription: string;
}

export type PromiseFn = (...args: any) => Promise<any>;
export type GetT<T> = T extends Promise<infer N> ? N : any;
export type GetFnResult<T extends PromiseFn> = GetT<ReturnType<T>>;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
