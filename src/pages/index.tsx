import { useQueryDialogue } from '~/hooks/useQueryDialogue';
import {useState, useMemo, useCallback} from "react";
import { useQueryScript } from '~/hooks/useQueryScript';

export default function Home() {
  const {data: root} = useQueryDialogue()
  const [scriptIndex, setScriptIndex] = useState(0)
  const [phaseScriptIndex, setPhaseScriptIndex] = useState(0)
  const [questIndex, setQuestIndex] = useState(0)
  const [spotIndex, setSpotIndex] = useState(0)
  //root -> spots[] -> quests[] -> phaseScripts[] -> scripts[] -> script
  const scriptUrl = useMemo (() => 
  root?.spots[spotIndex]?.quests[questIndex]?.phaseScripts[phaseScriptIndex]?.scripts[scriptIndex]?.script, 
  [root, spotIndex, questIndex, phaseScriptIndex, scriptIndex])
  const { data: script, isFetched: isFetchedScript} = useQueryScript(scriptUrl)

  const scripts = root?.spots[spotIndex]?.quests[questIndex]?.phaseScripts[phaseScriptIndex]?.scripts
  const phaseScripts = root?.spots[spotIndex]?.quests[questIndex]?.phaseScripts
  const quests = root?.spots[spotIndex]?.quests

  const onClick = useCallback(() => {
    if (!scripts || !phaseScripts || !quests) return

    if(scriptIndex < scripts.length-1) {
      setScriptIndex(scriptIndex+1)
      return
    }
    setScriptIndex(0)
    if(phaseScriptIndex < phaseScripts.length-1) {
      setPhaseScriptIndex(phaseScriptIndex+1)
      return
    }
    setPhaseScriptIndex(0)
    if(questIndex < quests.length-1) {
      setQuestIndex(questIndex+1)
      return
    }
  }, [scripts, phaseScripts, quests, scriptIndex, phaseScriptIndex, questIndex])

  return (
    <>
    {!isFetchedScript ? <>
    Loading
    </> : <>
      {script}
      <button onClick={onClick}>Next</button>
    </> }
    </>
  );
}
