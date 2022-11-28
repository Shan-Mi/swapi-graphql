export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Root', allPeople?: { __typename?: 'PeopleConnection', edges?: Array<{ __typename?: 'PeopleEdge', node?: { __typename?: 'Person', id: string, name?: string | null, height?: number | null } | null } | null> | null } | null };

export type PersonQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type PersonQuery = { __typename?: 'Root', person?: { __typename?: 'Person', id: string, name?: string | null, height?: number | null, filmConnection?: { __typename?: 'PersonFilmsConnection', films?: Array<{ __typename?: 'Film', title?: string | null, producers?: Array<string | null> | null, releaseDate?: string | null, planetConnection?: { __typename?: 'FilmPlanetsConnection', edges?: Array<{ __typename?: 'FilmPlanetsEdge', node?: { __typename?: 'Planet', surfaceWater?: number | null, name?: string | null } | null } | null> | null } | null } | null> | null } | null } | null };
