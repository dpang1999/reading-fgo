import React from 'react';
import Head from "next/head";
import Link from "next/link";
import * as WarXML from 'src/pages/WarXML'

export default function Home() {
  let obj: WarXML.Root
  const [war, setWar] = React.useState("https://api.atlasacademy.io/nice/NA/war/100?lang=en");
  const [json, setJson] = React.useState();
  const [script, setScript] = React.useState();
  const [spots, setSpots] = React.useState(); //spots is an array of the locations (X-A, X-E, X-F, etc.)
    //an important note is that all quests in that spot are listed in that spot (including interludes and rankups)
  const [quests, setQuests] = React.useState(); //quests is an array of each of the quests at a location
  const [phases, setPhases] = React.useState()//phases being arrows
  const [scripts, setScripts] = React.useState();//so scripts per phase are pre and post battle
  
  var currentSpot = 0;
  var currentQuest = 0;
  var currentPhase = 0;
  var currentScript = 0;



  const getScript = async () => {
    await fetch("https://api.atlasacademy.io/nice/NA/war/100?lang=en")
    .then((response) => response.json())
    .then(data => {setWar(data)}) //yo so like how do I make everything else wait for this fetch to complete first
    //.then((data) => obj = JSON.parse(data))
    console.log(war.spots);
    setSpots(war.spots);

    console.log(spots[0].quests);
    setQuests(spots[0].quests);

    console.log(quests[0].phaseScripts);
    setPhases(quests[0].phaseScripts);

    console.log(phases[0].scripts)
    setScripts(phases[0].scripts);

    currentSpot = 0;
    currentQuest = 0;
    currentPhase = 0;
    currentScript = 0;

    await fetch (scripts[0].script)
    .then((response) => response.text())
    .then(text => setScript(text))

    


  }
  
  function getNext() {
    currentScript++;
    console.log("%i %i", currentScript, scripts.length);
     if(currentScript >= scripts.length) {
      console.log("increment Phase");
      currentScript = 0;
      currentPhase++;
      //setScripts(phases[currentPhase].scripts);
      
    }
    if(currentPhase >= phases.length) {
      console.log("increment Quest");
      currentPhase = 0;
      currentQuest++;
      //setPhases(quests[currentQuest].phaseScripts);
      //setScripts(phases[currentPhase].scripts);
      
    }
    if(currentQuest >= quests.length) {
      console.log("increment Spot");
      //currentQuest = 0;
      //currentSpot++;
      //setPhases(quests[currentQuest].phaseScripts);
      //setQuests(spots[currentSpot].quests);
    } 
   

    //setSpots(war.spots)
    

    console.log('S:%i P:%i Q:%i Sp:%i', currentScript, currentPhase, currentQuest, currentSpot);
    console.log(quests[currentQuest].name);

    fetch (scripts[currentScript].script)
    .then((response) => response.text())
    .then(text => setScript(text)) 

  }


  //const warID: number = JSON.parse(script)
  return (
    <>
      <button onClick = {getScript}> Click </button>
      <br></br>{script} <br></br>
      <button onClick = {getNext}> NEXT! </button>
    </>
  );
}
