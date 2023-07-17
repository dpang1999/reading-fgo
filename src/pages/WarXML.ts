export interface Root {
    id: number
    coordinates: number[][]
    age: string
    name: string
    originalName: string
    longName: string
    originalLongName: string
    flags: string[]
    banner: string
    headerImage: string
    priority: number
    parentWarId: number
    materialParentWarId: number
    parentBlankEarthSpotId: number
    emptyMessage: string
    bgm: Bgm
    scriptId: string
    script: string
    startType: string
    targetId: number
    eventId: number
    eventName: string
    lastQuestId: number
    warAdds: WarAdd[]
    maps: Map[]
    spots: Spot[]
    spotRoads: SpotRoad[]
    questSelections: any[]
  }
  
  export interface Bgm {
    id: number
    name: string
    fileName: string
    notReleased: boolean
    audioAsset: string
  }
  
  export interface WarAdd {
    warId: number
    type: string
    priority: number
    overwriteId: number
    overwriteStr: string
    condType: string
    targetId: number
    value: number
    startedAt: number
    endedAt: number
  }
  
  export interface Map {
    id: number
    mapImage: string
    mapImageW: number
    mapImageH: number
    mapGimmicks: any[]
    headerImage: string
    bgm: Bgm2
  }
  
  export interface Bgm2 {
    id: number
    name: string
    fileName: string
    notReleased: boolean
    audioAsset: string
  }
  
  export interface Spot {
    id: number
    blankEarth: boolean
    joinSpotIds: any[]
    mapId: number
    name: string
    originalName: string
    image: string
    x: number
    y: number
    imageOfsX: number
    imageOfsY: number
    nameOfsX: number
    nameOfsY: number
    questOfsX: number
    questOfsY: number
    nextOfsX: number
    nextOfsY: number
    closedMessage: string
    spotAdds: any[]
    quests: Quest[]
  }
  
  export interface Quest {
    id: number
    name: string
    type: string
    flags: string[]
    consumeType: string
    consume: number
    consumeItem: any[]
    afterClear: string
    recommendLv: string
    spotId: number
    spotName: string
    warId: number
    warLongName: string
    chapterId: number
    chapterSubId: number
    chapterSubStr: string
    gifts: Gift[]
    releaseConditions: ReleaseCondition[]
    releaseOverwrites: any[]
    phases: number[]
    phasesWithEnemies: number[]
    phasesNoBattle: any[]
    phaseScripts: PhaseScript[]
    priority: number
    noticeAt: number
    openedAt: number
    closedAt: number
    giftIcon?: string
  }
  
  export interface Gift {
    id: number
    type: string
    objectId: number
    priority: number
    num: number
    giftAdds: any[]
  }
  
  export interface ReleaseCondition {
    type: string
    targetId: number
    value: number
    closedMessage: string
  }
  
  export interface PhaseScript {
    phase: number
    scripts: Script[]
  }
  
  export interface Script {
    scriptId: string
    script: string
  }
  
  export interface SpotRoad {
    id: number
    warId: number
    mapId: number
    image: string
    srcSpotId: number
    dstSpotId: number
    dispCondType: string
    dispTargetId: number
    dispTargetValue: number
    dispCondType2: string
    dispTargetId2: number
    dispTargetValue2: number
    activeCondType: string
    activeTargetId: number
    activeTargetValue: number
  }
  