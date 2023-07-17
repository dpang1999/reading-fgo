import { useQuery } from "react-query";

export function useQueryScript(scriptUrl: string | undefined) {
    return useQuery(["script", scriptUrl], async () => {
        const data = await (await fetch(scriptUrl!)).text()
        return data
    }, {enabled: !!scriptUrl})
    //useQueryScript is only enabled when scriptUrl is not undefined
}