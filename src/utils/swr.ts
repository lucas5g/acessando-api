import useSWR from "swr"

export function swr(url: string) {

  const fetcher = (url:string) => fetch(url).then(res => res.json())
  
  return useSWR(url, fetcher) 
  // as {
  //   data: any,
  //   error: any,
  //   isLoading: boolean,
  //   mutate: any
  // }


}

