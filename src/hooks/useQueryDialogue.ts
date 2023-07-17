import { useQuery } from "react-query";
import { Root } from "~/pages/WarXML";

export function useQueryDialogue() {
    return useQuery(["dialogue"], async () => {
        const data = await (await fetch("https://api.atlasacademy.io/nice/NA/war/100?lang=en")).json() as Root
        return data
    })
}