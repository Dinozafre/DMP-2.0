const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
    const contracts = [
        {
            "Data": {
                "EnableSaving": true,
                "GameDifficulties": [
                    {
                        "Difficulty": "easy",
                        "Bricks": [
                            "[assembly:/_pro/scenes/missions/mumbai/mission_grease_easy.brick].entitytype"
                        ]
                    },
                    {
                        "Difficulty": "normal",
                        "Bricks": []
                    },
                    {
                        "Difficulty": "hard",
                        "Bricks": [
                            "[assembly:/_pro/scenes/missions/mumbai/mission_grease_pro1.brick].entitytype"
                        ]
                    }
                ],
                "Objectives": [
                    {
                        "Comment": "---- Primary Target ----",
                        "Id": "1215bf5b-6dae-480d-9f97-d36d7a1fb3ac",
                        "Category": "primary",
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "20715eb7-e8b5-443c-a316-fa1edd0954e0"
                            }
                        }
                    }
                ],
                "Bricks": [
                    "assembly:/_pro/scenes/missions/mumbai/mission_grease.brick"
                ],
                "DevOnlyBricks": [
                   
                ],
                "VR": [
                    {
                        "Quality": "base",
                        "Bricks": [
                            "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                            "assembly:/_pro/scenes/missions/skunk/vr_overrides_ps4perf.brick"
                        ]
                    }
                ],
                "GameChangers": [],
                "GameChangerReferences": [],
                "Exits": [],
                "Entrances": [
                    "a95703cb-091b-4d05-a2ee-3a70ade13590",
                    "5e6a6e2c-ee2c-40a7-9de5-d7fb8fbd8dcd",
                    "51145d77-882e-4be0-a471-73704497aa8b",
                    "724b24ef-e87f-4060-b7ed-5c315fb0f29f",
                    "8b1c3ba0-9c91-4b3e-96f9-7d3c8632b7c2",
                    "f1bb66b5-b446-4a00-a951-af7310e28566",
                    "774b7dec-ce57-4318-9dbd-f6d7fa39ef1d",
                    "f4659b56-65c3-4f4f-8f20-11d09af2f2d2",
                    "c7596e36-43ae-4e03-aa66-84f6a88f0cd3"
                ],
                "Stashpoints": [
                    "fbc4129a-db85-4c9e-9a4e-c17dedf8f514",
                    "5f62c1fa-fdbb-40e5-af7e-893c29925e88"
                ]
            },
            "Metadata": {
                "Id": "d658bdf0-183d-463f-a479-235901912422",
                "IsPublished": true,
                "TileImage": "images/Grease/tile.jpg",
                "CreationTimestamp": "2016-12-22T10:38:47.0308316+01:00",
                "CreatorUserId": "00000000-0000-0000-0000-000000000000",
                "Title": "UI_CONTRACT_GREASE_TITLE",
                "Description": "UI_CONTRACT_GREASE_DESC",
                "CodeName_Hint": "Grease",
                "Location": "LOCATION_MUMBAI",
                "ScenePath": "assembly:/_pro/scenes/missions/Mumbai/scene_mongoose.entity",
                "Type": "mission",
                "Release": "2.9.x",
                "RequiredUnlockable": "",
                "Drops": [],
                "OpportunitiesDisabled": true,
                "Entitlements": [
                    "H2_LEGACY_STANDARD"
                ]
            },
            "UserData": null
        },
        {
            "Data": {
                "GameDifficulties": [
                    {
                        "Difficulty": "easy",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/bangkok/difficulty_easy_bangkok_tiger.brick"
                        ]
                    },
                    {
                        "Difficulty": "normal",
                        "Bricks": []
                    },
                    {
                        "Difficulty": "hard",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/bangkok/override_hard.brick"
                        ]
                    }
                ],
                "Entrances": [
                    "57e5073f-b4e6-4717-a8db-cbc94cb51087"
                ],
                "Objectives": [
                    {
                        "_comment": "--- Escape ---",
                        "Id": "a66833dc-df95-4619-8787-8de078adc60e",
                        "Category": "primary",
                        "ExcludeFromScoring": true,
                        "ObjectiveType": "custom",
                        "Image": "images/Escape/escape_objective.jpg",
                        "BriefingName": "$loc UI_CONTRACT_ESCAPE_NAME",
                        "LongBriefingText": "$loc UI_CONTRACT_ESCAPE_OBJECTIVE",
                        "BriefingText": "$loc UI_CONTRACT_ESCAPE_OBJECTIVE",
                        "HUDTemplate": {
                            "display": "$loc UI_CONTRACT_ESCAPE_NAME",
                            "iconType": 17
                        },
                        "Type": "statemachine",
                        "Definition": {
                            "Context": {},
                            "Scope": "session",
                            "States": {
                                "Start": {
                                    "Intel": {
                                        "Transition": "Success"
                                    }
                                }
                            }
                        } 
                    }
                ],
                "Bricks": [
                    "assembly:/_pro/scenes/missions/bangkok/mission_escape.brick"
                ],
                "VR": [
                    {
                        "Quality": "base",
                        "Bricks": [
                            "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                            "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick",
                            "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_ps4perf.brick"
                        ]
                    }
                ],
                "GameChangers": [],
                "MandatoryLoadout": []
            },
            "Metadata": {
                "Id": "afba7d2c-0a57-4481-bf91-2a3019b66729",
                "Location": "LOCATION_BANGKOK",
                "IsPublished": true,
                "CreationTimestamp": "2015-06-22T15:39:42.9839092+02:00",
                "CreatorUserId": "00000000-0000-0000-0000-000000000000",
                "Title": "UI_CONTRACT_ESCAPE_TITLE",
                "Description": "UI_CONTRACT_ESCAPE_DESC",
                "TileImage": "images/Escape/title.jpg",
                "CodeName_Hint": "Escape",
                "ScenePath": "assembly:/_pro/scenes/missions/bangkok/_scene_mission_tiger_upload.entity",
                "Type": "mission",
                "Release": "1.4.x",
                "OpportunitiesDisabled": true,
                "RequiredUnlockable": "ACCESS_HIT_TIGER",
                "Drops": [
                    "ACCESS_HIT_BULL"
                ],
                "Entitlements": [
                    "H1_LEGACY_STANDARD"
                ]
            },
            "UserData": null
        },
        {
            "Data": {
                "EnableExits": {
                    "$eq": [
                        "$f3ef4005-b53a-4074-be4e-f117c4211ae2",
                        "$88ae4c81-d61e-41f3-ac53-a749e46ca726",
                        "Completed"
                    ]
                },
                "Objectives": [
                    {
                        "Id": "f3ef4005-b53a-4074-be4e-f117c4211ae2",
                        "Category": "primary",
                        "ObjectiveType": "setpiece",
                        "IsHidden": true,
                        "ForceShowOnLoadingScreen": true,
                        "Image": "images/actors/beaver_target.png",
                        "BriefingName": "$loc UI_CONTRACT_BEAVER_NAME_TARGET_01",
                        "BriefingText": "$loc UI_CONTRACT_BEAVER_NAME_TARGET_01",
                        "LongBriefingText": "$loc UI_BEAVER_DESCRIPTION",
                        "HUDTemplate": {
                            "display": "$loc UI_CONTRACT_BEAVER_HUD_TARGET_01"
                        },
                        "DisplayAsKillObjective": true,
                        "Type": "statemachine",
                        "Definition": {
                            "Context": {
                                "Targets": [
                                    "66863ca1-d447-4aa5-a3f3-bf9f70532aa9"
                                ]
                            },
                            "States": {
                                "Start": {
                                    "TargetDead": {
                                        "Transition": "Success"
                                    },
                                    "TargetDeadElectric": {
                                        "Transition": "Success"
                                    }
                                }
                            }
                        }
                    },
                    {
                        "Id": "88ae4c81-d61e-41f3-ac53-a749e46ca726",
                        "Category": "primary",
                        "ForceShowOnLoadingScreen": true,
                        "ExcludeFromScoring": true,
                        "Image": "images/Beaver/pickup_cocaine.jpg",
                        "BriefingName": "$loc UI_CONTRACT_BEAVER_Cocaine_01",
                        "BriefingText": "$loc UI_CONTRACT_BEAVER_Cocaine_01",
                        "HUDTemplate": {
                            "display": "$loc UI_CONTRACT_BEAVER_Cocaine_01",
                            "iconType": 17
                        },
                        "IsHidden": true,
                        "ObjectiveType": "custom",
                        "Type": "statemachine",
                        "Definition": {
                            "States": {
                                "Start": {
                                    "PickUpCocaine": {
                                        "Transition": "Success"
                                    },
                                    "DestroyedCocaine":{
                                        "Transition": "Failure"
                                    }
                                }
                            }
                        }
                    },
                    {
                        "_comment": "------ HIDDEN -----",
                        "Category": "primary",
                        "Definition": {
                            "States": {
                                "Start": {
                                    "-": {
                                       "Transition": "Success"
                                    }
                                },
                                "Success": {
                                    "DestroyedCocaine": {
                                        "Transition": "Failure"
                                    } 
                                }
                            }
                        },
                        "ExcludeFromScoring": true,
                        "Id": "68930773-003c-4b4f-a5cc-61f13c5e8b77",
                        "IgnoreIfInactive": true,
                        "IsHidden": true,
                        "ObjectiveType": "custom",
                        "Type": "statemachine"
                    }
                ],
                "Bricks":[
                    "assembly:/_pro/scenes/missions/coastaltown/mission_beaver.brick"
                ],
                "GameDifficulties": [
                    {
                        "Difficulty": "easy",
                        "Bricks": ["assembly:/_pro/scenes/missions/coastaltown/easy_beaver.brick"]
                    },
                    {
                        "Difficulty": "normal",
                        "Bricks": []
                    },
                    {
                        "Difficulty": "hard",
                        "Bricks": ["assembly:/_pro/scenes/missions/coastaltown/hard_beaver.brick"]
                    }
                ],
                "Entrances": [
                    "a73d92c4-cd4b-4bd2-9485-943aa613a79c",
                    "c113315d-ffcc-4878-9e70-bb35aadf0211",
                    "4970aae5-e4c1-4d5c-a66a-0fc06616211b",
                    "1c386bb9-aead-42c0-b604-ad560056ddf4",
                    "c27f76ca-ed71-4b2d-9b9d-693875df830c"
                ]
            },
            "Metadata": {
                "Id": "2c8f8fd1-94df-4e69-b5db-56a8382cb228",
                "IsPublished": true,
                "TileImage": "images/Beaver/title.jpg",
                "CreationTimestamp": "2016-12-22T10:38:47.0308316+01:00",
                "CreatorUserId": "00000000-0000-0000-0000-000000000000",
                "Title": "UI_CONTRACT_BEAVER_TITLE",
                "Description": "UI_CONTRACT_BEAVER_DESC",
                "CodeName_Hint": "Beaver",
                "Location": "LOCATION_COASTALTOWN",
                "ScenePath": "assembly:/_pro/scenes/missions/coastaltown/mission01.entity",
                "Type": "mission",
                "Release": "2.9.x",
                "RequiredUnlockable": "",
                "OpportunitiesDisabled": true,
                "Entitlements": [
                    "H1_LEGACY_STANDARD"
                ]
            },
            "UserData": null
        },
        {
            "Data": {
                "EnableSaving": true,
                "Objectives": [
                    {
                        "_comment": "----- Eliminate Josué Morgan-----",
                        "Id": "ebb3ab79-fb8a-4a76-8d5b-f74aa61fb642",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "e1c5f7a1-c1f7-4297-ad08-63189ac30909"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Arnaud Céleste-----",
                        "Activation": {
                            "$eq": [
                                "$ebb3ab79-fb8a-4a76-8d5b-f74aa61fb642",
                                "Completed"
                            ]
                        },
                        "Id": "ff203ce2-f65a-49ff-aa16-e8a1bd643799",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "6ffab9b4-a025-4665-a0f6-5a7262c41869"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Gaétan Boniface-----",
                        "Activation": {
                            "$eq": [
                                "$ff203ce2-f65a-49ff-aa16-e8a1bd643799",
                                "Completed"
                            ]
                        },
                        "Id": "cf711dea-0908-4627-ba6d-87e4715953c6",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "280c80f9-262e-4adf-8aef-06382d3cc094"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Gaétan Boniface-----",
                        "Activation": {
                            "$eq": [
                                "$cf711dea-0908-4627-ba6d-87e4715953c6",
                                "Completed"
                            ]
                        },
                        "Id": "c21cb26c-f705-435d-bece-b499f3c8bfd2",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "0aa74f7d-ab77-4220-a228-ff1c5f556579"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Elmer Landyn-----",
                        "Activation": {
                            "$eq": [
                                "$c21cb26c-f705-435d-bece-b499f3c8bfd2",
                                "Completed"
                            ]
                        },
                        "Id": "5b3383f3-3491-49d2-9a6f-d36b917e0b0c",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "da1b3cd5-6c83-429f-87fe-0ec03352f306"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Dimosthenis Yorgos-----",
                        "Activation": {
                            "$eq": [
                                "$5b3383f3-3491-49d2-9a6f-d36b917e0b0c",
                                "Completed"
                            ]
                        },
                        "Id": "1a5b5af1-1187-4cb1-9834-ec6f8f31abf9",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "cd8f0fb5-dc57-4941-934a-625b0ce832f3"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Kyriakos Prokopios-----",
                        "Activation": {
                            "$eq": [
                                "$5b3383f3-3491-49d2-9a6f-d36b917e0b0c",
                                "Completed"
                            ]
                        },
                        "Id": "dbb80501-5f60-4206-bef6-5d437434c594",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "ca06f4b5-5f14-4af2-828b-495a7034ab31"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Erland Viggo-----",
                        "Activation": {
                            "$eq": [
                                "$1a5b5af1-1187-4cb1-9834-ec6f8f31abf9",
                                "$dbb80501-5f60-4206-bef6-5d437434c594",
                                "Completed"
                            ]
                        },
                        "Id": "696ba3dc-8be8-4829-a811-bf3210f79eb5",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "f6508b07-61da-490e-a37e-d2551fdcd2ed"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Marwin Gerd-----",
                        "Activation": {
                            "$eq": [
                                "$696ba3dc-8be8-4829-a811-bf3210f79eb5",
                                "Completed"
                            ]
                        },
                        "Id": "b59ffb9e-fda4-4a51-8171-f550bdd44dc1",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "4a687af6-b279-437f-b205-10d3605d4409"
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Douglass Kendrick-----",
                        "Activation": {
                            "$eq": [
                                "$b59ffb9e-fda4-4a51-8171-f550bdd44dc1",
                                "Completed"
                            ]
                        },
                        "Id": "b7096d98-c7f9-46f3-aa87-4cc66de8e8ef",
                        "Primary": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "dfed7fad-b5b2-475b-8cc3-e6a0b32a9f05"
                            }
                        }
                    }
                ],
                "Bricks": [
                    "assembly:/_pro/scenes/missions/hawk/mission_jaguar.brick"
                ],
                "GameChangers": [],
                "EngineModesBricks": [
                    {
                        "Mode": "singleplayer",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/hawk/singleplayer_hawk.brick"
                        ]
                    },
                    {
                        "Mode": "multiplayer",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/hawk/multiplayer_hawk.brick"
                        ]
                    }
                ],
                "SimulationQualities": [
                    {
                        "Quality": "better",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/hawk/intel_6core_hawk.brick"
                        ]
                    },
                    {
                        "Quality": "best",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/hawk/intel_8core_hawk.brick"
                        ]
                    }
                ]
            },
            "Metadata": {
                "CreatorUserId": "ae4a3efe-63c9-43e9-8f57-67678b9f95e2",
                "IsPublished": true,
                "TileImage": [
                    {
                        "Mode": "singleplayer",
                        "Image": "images/sniper/jaguar_tile.jpg"
                    },
                    {
                        "Mode": "multiplayer",
                        "Image": "images/contracts/hawk/tile_mp.jpg"
                    }
                ],
                "BackgroundImage": [
                    {
                        "Mode": "singleplayer",
                        "Image": "images/contracts/hawk/tile_background.jpg"
                    },
                    {
                        "Mode": "multiplayer",
                        "Image": "images/contracts/hawk/tile_background.jpg"
                    }
                ],
                "Location": "LOCATION_AUSTRIA",
                "Title": "UI_CONTRACT_JAGUAR_TITLE",
                "CodeName_Hint": "Jaguar",
                "ScenePath": "assembly:/_pro/scenes/missions/Hawk/scene_hawk.entity",
                "Description": "UI_CONTRACT_JAGUAR_DESC",
                "Id": "9d9bd362-51c8-4e2c-9a73-7fd015ca7ede",
                "CreationTimestamp": "2014-04-04T09:41:25.473Z",
                "LastUpdate": "2015-05-19T09:56:04.984Z",
                "Type": "sniper",
                "Release": "2.0.x",
                "Gamemodes": [
                    "sniper"
                ],
                "Enginemodes": [
                    "singleplayer"
                ],
                "CharacterSetup": [
                    {
                        "Mode": "singleplayer",
                        "Characters": [
                            {
                                "Name": "47",
                                "Id": "44eba719-4d3a-4f27-9437-3f29821934b3",
                                "MandatoryLoadout": [
                                    "FIREARMS_SC_HERO_SNIPER_HM"
                                ]
                            }
                        ]
                    }
                ]
            },
            "UserData": {}
        },
        { 
            "Data": {
                "EnableSaving": true,
                "Objectives": [
                    {
                        "_comment": "--- Core ---",
                        "Id": "0a0ea850-25d2-4f2f-a1c2-164d98a5bd92",
                        "Category": "primary",
                        "ExcludeFromScoring": true,
                        "ObjectiveType": "custom",
                        "Image": "images/Elephant/core.jpg",
                        "BriefingName": "$loc UI_CONTRACT_ELEPHANT_NAME",
                        "LongBriefingText": "$loc UI_CONTRACT_ELEPHANT_DESC",
                        "BriefingText": "$loc UI_CONTRACT_ELEPHANT_TEXT",
                        "HUDTemplate": {
                            "display": "$loc UI_CONTRACT_ELEPHANT_NAME",
                            "iconType": 17
                        },
                        "Type": "statemachine",
                        "Definition": {
                            "Context": {                 
                                "Targets": [
                                    "62dc7764-4861-44c5-b276-44d6c0dd68ce"
                                ]
                            },
                            "Scope": "session",
                            "States": {
                                "Start": {
                                    "CoreSuccess": {
                                        "Transition": "Success"
                                    }
                                }
                            }
                        } 
                    },
                    {
                        "_comment": "----- Silent objective to trigger target elimination objective -----",
                        "IgnoreIfInactive": true,
                        "Id": "9dfe0ae6-4a7b-4d48-9581-91fff9fb9138",
                        "Image": "images/Elephant/read.jpg",
                        "Category": "condition",
                        "ExcludeFromScoring": true,
                        "OnActive": {
                            "IfInProgress": {
                                "Visible": true
                            },
                            "IfCompleted": {
                                "Visible": true
                            },
                            "IfFailed": {
                                "Visible": true
                            }
                        },
                        "BriefingName": "$loc UI_CONTRACT_ELEPHANT_RED_NAME",
                        "LongBriefingText": "$loc UI_CONTRACT_ELEPHANT_RED_DESC",
                        "BriefingText": "$loc UI_CONTRACT_ELEPHANT_RED_TEXT",
                        "HUDTemplate": {
                            "display": "$loc UI_CONTRACT_ELEPHANT_RED_NAME",
                            "iconType": 17
                        },
                        "Type": "statemachine",
                        "Definition": {
                            "Scope": "session",
                            "Context": {
                                "Targets":[
                                    "c30395ae-369b-48a3-b585-93f241c27d41"
                                ]
                            },
                            "States": {
                                "Start": {
                                    "Read": {
                                        "Transition": "Success"
                                    }
                                }
                            }
                        }
                    },
                    {
                        "_comment": "----- Eliminate Luitpold Diethard -----",
                        "Activation": {
                            "$eq": [
                                "$0a0ea850-25d2-4f2f-a1c2-164d98a5bd92",
                                "$9dfe0ae6-4a7b-4d48-9581-91fff9fb9138",
                                "Completed"
                            ]
                        },
                        "Id": "f6d37527-2130-46de-8f74-57fd4bfed298",
                        "Primary": true,
                        "RepeatSuccess": 1,
                        "RepeatFailed": 1,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "24f799fb-3a23-47cf-b82d-97b43ffeecb2"
                            }
                        }
                    }
                ],
                "Bricks": [
                  "assembly:/_pro/scenes/missions/colombia/mission_elephant.brick"
                ],
                "DevOnlyBricks": [
                   
                ],
                "VR": [
                    {
                        "Quality": "base",
                        "Bricks": [
                            "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                            "assembly:/_pro/scenes/missions/colombia/vr_overrides_hippo.brick",
                            "assembly:/_PRO/scenes/missions/colombia/vr_overrides_ps4perf.brick"
                        ]
                    }
                ],
                "GameChangers": [],
                "GameChangerReferences": [],
                "GameDifficulties": [
                    {
                        "Difficulty": "easy",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/colombia/difficulty_easy_columbia_hippo.brick"
                        ]
                    },
                    {
                        "Difficulty": "normal",
                        "Bricks": []
                    },
                    {
                        "Difficulty": "hard",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/colombia/difficulty_hard_columbia_hippo.brick"
                        ]
                    }
                ],
                "SimulationQualities": [
                    {
                        "Quality": "better",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/colombia/intel_6core_hippo.brick"
                        ]
                    },
                    {
                        "Quality": "best",
                        "Bricks": [
                            "assembly:/_pro/scenes/missions/colombia/intel_8core_hippo.brick"
                        ]
                    }
                ]
            },
            "Metadata": {
                "Id": "9c3ca54e-bdd4-4567-80fd-f16cb22159aa",
                "IsPublished": true,
                "TileImage": "images/contracts/hippo/tile.jpg",
                "BriefingVideo": "briefing_hippo",
                "DebriefingVideo": "debriefing_hippo",
                "CreationTimestamp": "2016-12-15T16:27:35.423427+01:00",
                "CreatorUserId": "00000000-0000-0000-0000-000000000000",
                "Title": "UI_CONTRACT_ELEPHANT_TITLE",
                "Description": "UI_CONTRACT_ELEPHANT_DESC",
                "CodeName_Hint": "Hippo",
                "Location": "LOCATION_COLOMBIA",
                "ScenePath": "assembly:/_pro/scenes/missions/colombia/scene_hippo.entity",
                "Type": "mission",
                "Release": "2.1.x",
                "RequiredUnlockable": "ACCESS_HIT_HIPPO",
                "Drops": [
                    "ACCESS_HIT_MONGOOSE"
                ],
                "Entitlements": [
                    "H2_LEGACY_STANDARD"
                ]
            },
            "UserData": null
        },
        { 
              "Data": {
                  "EnableSaving": true,
                  "EnableExits": {
                      "$or": [
                          {
                              "$eq": [
                                  "$3850c956-f4c2-44b3-a2a6-a7f8d65eff50",
                                  "Completed"
                              ]
                          },
                          {
                              "$eq": [
                                  "24ec148a-0a21-42bb-ad67-fb442bcaa8d2",
                                  "Completed"
                              ]
                          }
                      ]
                  },
                  "Objectives": [
                      {
                          "Id": "597e3bd0-17a5-4272-aff1-d15dedbc729a",
                          "Category":"secondary",
                          "ObjectiveType": "custom",
                          "BriefingName": "$loc UI_CONTRACT_WOLF_TALK_NAME",
                          "ForceShowOnLoadingScreen": true,
                          "LongBriefingText": "$loc UI_CONTRACT_WOLF_TALK_TEXT",
                          "Image": "images/Wolf/talk.jpg",
                          "HUDTemplate": {
                              "display": "$loc UI_CONTRACT_WOLF_TALK_NAME",
                              "iconType": 17
                          },
                          "BriefingText": "$loc UI_CONTRACT_WOLF_TALK_TEXT",
                          "Type": "statemachine",
                          "Definition": {
                              "Context": {
                                  "Targets": [
                                      "6fc03e67-32d0-4721-9655-de1f7bd76374"
                                  ]
                              },
                              "Scope": "session",
                              "States": {
                                  "Start": {
                                      "TalkDone": [
                                          {
                                              "Transition": "Success" 
                                          }
                                      ]
                                  }
                              }
                          }
                      },
                      {
                          "_comment": "Martinez is dead or pacified/scared",
                          "Id": "2f03f526-9767-47ea-a576-951470584554",
                          "Type": "statemachine",
                          "Category": "primary",
                          "OnActive": {
                              "IfInProgress": {
                                  "Visible": false
                              },
                              "IfCompleted": {
                                  "Visible": false
                              },
                              "IfFailed": {
                                  "Visible": false
                              }
                          },
                          "Definition": {
                              "Scope": "session",
                              "States": {
                                  "Start": {
                                      "DeadMartinez": [{"Transition": "Failure"}],
                                      "PacifiedMartinez": [{"Transition":"Failure"}],
                                      "MartinezScared": [{"Transition":"Failure"}]
                                  }
                              }
                          }
                      },
                      {
                          "_comment": "----- Eliminate Rico Delgado -----",
                          "Activation": {
                              "$eq": [
                                  "$597e3bd0-17a5-4272-aff1-d15dedbc729a",
                                  "Completed"
                              ]
                          },
                          "Id": "3850c956-f4c2-44b3-a2a6-a7f8d65eff50",
                          "Primary": false,
                          "SuccessEvent": {
                              "EventName": "Kill",
                              "EventValues": {
                                  "RepositoryId": "c2519e4d-5cb7-4018-97b1-e01c99a656f8"
                              }
                          }
                      },
                      {
                          "Id": "24ec148a-0a21-42bb-ad67-fb442bcaa8d2",
                          "Category": "secondary",
                          "Type": "statemachine",
                          "IsHidden": true,
                          "Definition": {
                              "Scope": "session",
                              "Context": {},
                              "States": {
                                  "Start": {
                                      "Kill": [
                                          {
                                              "Condition": {
                                                  "$eq": [
                                                      "$Value.RepositoryId",
                                                      "c2519e4d-5cb7-4018-97b1-e01c99a656f8"
                                                  ]
                                              },
                                              "Transition": "Success"
                                          }
                                      ]
                                  }
                              }
                          },
                          "OnInactive": {
                              "IfCompleted": {
                                  "State": "Completed",
                                  "Visible": false
                              }
                          },
                          "OnActive": {
                              "IfInProgress": {
                                  "Visible": false
                              },
                              "IfCompleted": {
                                  "Visible": false
                              }
                          }
                      }
                  ],
                  "Bricks": [
                      "assembly:/_pro/scenes/missions/miami/mission_wolf.brick"
                  ],
                  "VR": [
                      {
                          "Quality": "base",
                          "Bricks": [
                              "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                              "assembly:/_pro/scenes/missions/miami/vr_overrides_flamingo.brick",
                              "assembly:/_PRO/scenes/missions/miami/vr_overrides_ps4perf.brick"
                          ]
                      }
                  ],
                  "GameChangers": [],
                  "GameChangerReferences": [],
                  "GameDifficulties": [
                      {
                          "Difficulty": "easy",
                          "Bricks": [
                              "assembly:/_pro/scenes/missions/miami/mission_easy_wolf.brick"
                          ]
                      },
                      {
                          "Difficulty": "normal",
                          "Bricks": []
                      },
                      {
                          "Difficulty": "hard",
                          "Bricks": [
                              "assembly:/_pro/scenes/missions/miami/mission_hard_wolf.brick"
                          ]
                      }
                  ],
                  "SimulationQualities": [
                      {
                          "Quality": "better",
                          "Bricks": [
                              "assembly:/_pro/scenes/missions/miami/scenario_flamingo_intel_6cores.brick"
                          ]
                      },
                      {
                          "Quality": "best",
                          "Bricks": [
                              "assembly:/_pro/scenes/missions/miami/scenario_flamingo_intel_8cores.brick"
                          ]
                      }
                  ]
              },
              "Metadata": {
                  "Id":  "0d37e752-cf0a-49e2-98d9-9f29b665df22",
                  "IsPublished": true,
                  "TileImage": "images/Wolf/tile.jpg",
                  "CreationTimestamp": "2016-12-22T10:38:47.0308316+01:00",
                  "CreatorUserId": "00000000-0000-0000-0000-000000000000",
                  "Title": "UI_CONTRACT_WOLF_TITLE",
                  "Description": "UI_CONTRACT_WOLF_DESC",
                  "CodeName_Hint": "Wolf",
                  "Location": "LOCATION_MIAMI",
                  "ScenePath": "assembly:/_pro/scenes/missions/miami/scene_flamingo.entity",
                  "Type": "mission",
                  "Drops": [
                      "ACCESS_HIT_HIPPO"
                  ],
                  "Entitlements": [
                      "H2_LEGACY_STANDARD"
                  ]
              },
              "UserData": null
          }
    ]
    ///Miami assanations challanges
     // 1# Jungle Suprise 2# Jungle Machete
    const assanationschallenges = [
        {
            Id: "06bb3c5b-2cf4-40d8-a9ba-080fe170aa05",
            Name: "UI_CHALLENGES_DMP2_MIAMI_KILL_RICO_MACHETE_NAME",
            ImageName: "images/challenges/DMP2/miami_kill_delgado_by_machete2.jpg",
            Description: "UI_CHALLENGES_DMP2_MIAMI_KILL_RICO_MACHETE_DESC",
            Rewards: {
                MasteryXP: 5000
            },
            Drops: [],
            IsPlayable: true,
            IsLocked: false,
            HideProgression: false,
            CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
            Icon: "challenge_category_assassination",
            LocationId: "LOCATION_PARENT_MIAMI",
            ParentLocationId: "LOCATION_PARENT_MIAMI",
            CategoryId: "assassination",
            Type: "contract",
            DifficultyLevels: [],
            XpModifier: {},
            RuntimeType: "Hit",
            Definition: {
                Scope: "hit",
                States: {
                    Start: {
                        ricoDelgadoKilledMachete: {
                            Transition: "Success"
                        }
                    }
                }
            },
            Tags: ["story","assassination"],
            InclusionData: {
                ContractIds: ["0d37e752-cf0a-49e2-98d9-9f29b665df22"]
            }
        },
        {
            "Id": "e8a19769-3576-4396-a1c4-3729c65cc90a",
            "Name": "UI_CHALLENGES_DMP2_MUMBAI_DROWNTARGET_NAME",
            "ImageName": "images/challenges/DMP2/mumbai_drown_layton_cane.jpg",
            "Description": "UI_CHALLENGES_DMP2_MUMBAI_DROWNTARGET_DESC",
            "Rewards": {
                "MasteryXP": 5000
            },
            "Drops": [],
            "IsPlayable": true,
            "IsLocked": false,
            "HideProgression": false,
            "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
            "Icon": "challenge_category_assassination",
            "LocationId": "LOCATION_PARENT_MUMBAI",
            "ParentLocationId": "LOCATION_PARENT_MUMBAI",
            "CategoryId": "assassination",
            "Type": "contract",
            "DifficultyLevels": [],
            "OrderIndex": 10000,
            "XpModifier": {},
            "RuntimeType": "Hit",
            "Definition": {
                "Scope": "session",
                "States": {
                    "Start": {
                            "Kill": {
                                "Condition": {
                                 "$and": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "20715eb7-e8b5-443c-a316-fa1edd0954e0"
                                    ],
                                    "$eq": [
                                        "$Value.KillMethodStrict",
                                        "accident_drown"
                                    ]
                                }
                                },
                                "Transition": "Success"
                        }
                    }
                }
            },
            "Tags": ["story", "assasination"],
            "InclusionData": {
                "ContractIds": ["d658bdf0-183d-463f-a479-235901912422"]
            }
        }
        ///Mumbai
        ///Add drown target challange and poison target by sushi
        ///Also add flamingo kill or pacify in feats
    ]
        ///Miami discovery challanges
        const discoverychallenges = [
                {
                    Id: "15cc5333-63da-4622-87f3-8c17652459ed",
                    Name: "UI_CHALLENGES_DMP2_MIAMI_PICKUP_MACHETE_NAME",
                    ImageName: "images/challenges/DMP2/miami_pickup_machete2.jpg",
                    Description: "UI_CHALLENGES_DMP2_MIAMI_PICKUP_MACHETE_DESC",
                    Rewards: {
                        MasteryXP: 2000
                    },
                    Drops: [],
                    IsPlayable: true,
                    IsLocked: false,
                    HideProgression: false,
                    CategoryName: "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
                    Icon: "challenge_category_discovery",
                    LocationId: "LOCATION_PARENT_MIAMI",
                    ParentLocationId: "LOCATION_PARENT_MIAMI",
                    Type: "contract",
                    DifficultyLevels: [],
                    XpModifier: {},
                    RuntimeType: "Hit",
                    Definition: {
                        Scope: "session",
                        States: {
                            Start: {
                                PickupMachete: {
                                    Transition: "Success"
                                }
                            }
                        }
                    },
                    Tags: ["story","discovery"],
                    InclusionData: {
                        ContractIds: ["0d37e752-cf0a-49e2-98d9-9f29b665df22"]
                    }
        }
    ]
        /// targets delgado chellange
        const targetschallenges = [
        {
                    "Id": "c1872e1e-aae0-47fa-b094-6238102f27bd",
                    "Name": "UI_CHALLENGES_DMP2_MIAMI_RICO_KILLED_NAME",
                    "ImageName": "images/actors/wolf_target.jpg",
                    "Description": "UI_CHALLENGES_DMP2_MIAMI_RICO_KILLED_DESC",
                    "Rewards": {
                        "MasteryXP": 0
                    },
                    "Drops": [
                        "PROP_POISON_LETHAL_FLOWER"
                    ],
                    "IsPlayable": true,
                    "CategoryId": "targets",
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
                    "Icon": "challenge_category_targets",
                    "LocationId": "LOCATION_PARENT_MIAMI",
                    "ParentLocationId": "LOCATION_PARENT_MIAMI",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "hit",
                        "States": {
                         "Start": {
                             "Kill": {
                                 "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "c2519e4d-5cb7-4018-97b1-e01c99a656f8"
                                    ],
                                    "Transition": "Success"
                                  }
                            }
                            }
                        }
                    },
                    "Tags": ["story", "hard", "targets"],
                    "InclusionData": {
                        "ContractIds": ["0d37e752-cf0a-49e2-98d9-9f29b665df22"]
                    }
        },
        {
            "Id": "04e3ac64-f3ee-41ad-9d47-85a2598127b9",
            "Name": "UI_CHALLENGES_DMP2_MUMBAI_LAYTON_KILLED_NAME",
            "ImageName": "images/actors/grease_Layton_Caine.jpg",
            "Description": "UI_CHALLENGES_DMP2_MUMBAI_LAYTON_KILLED_DESC",
            "Rewards": {
                "MasteryXP": 4000
            },
            "Drops": [],
            "IsPlayable": true,
            "IsLocked": false,
            "HideProgression": false,
            "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
            "Icon": "challenge_category_targets",
            "LocationId": "LOCATION_PARENT_MUMBAI",
            "ParentLocationId": "LOCATION_PARENT_MUMBAI",
            "Type": "contract",
            "DifficultyLevels": [],
            "OrderIndex": 10000,
            "XpModifier": {},
            "RuntimeType": "Hit",
            "Definition": {
                "Scope": "hit",
                "States": {
                    "Start": {
                        "Kill": {
                            "Condition": {
                                "$eq": [
                                    "$Value.RepositoryId",
                                    "20715eb7-e8b5-443c-a316-fa1edd0954e0"
                                ]
                            },
                            "Transition": "Success"
                        }
                    }
                }
            },
            "Tags": ["story", "hard", "targets"],
            "InclusionData": {
                "ContractIds": ["d658bdf0-183d-463f-a479-235901912422"]
            }
        }
    ]
    ///add also feats for spaienza
    const featsschallenges = [
        ///start meeting
             {
                    "Id": "32d5908e-9a52-47de-853c-977b0d7cb4e8",
                    "Name": "UI_CHALLENGES_DMP2_SAPIENZA_MEETING_NAME",
                    "ImageName": "images/challenges/DMP2/orginize_meeting_with_target.jpg",
                    "Description": "UI_CHALLENGES_DMP2_SAPIENZA_MEETING_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
                    "Icon": "challenge_category_feats",
                    "LocationId": "LOCATION_PARENT_COASTALTOWN",
                    "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "MeetingStart": {
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "easy", "feats"],
                    "InclusionData": {
                        "ContractIds": ["2c8f8fd1-94df-4e69-b5db-56a8382cb228"]
                    }
                },
                ///complete Bangkock undetected
                {
                    "Id": "02abef2d-ca6b-4748-ac2a-42354b6a6aca",
                    "Name": "UI_CHALLENGES_DMP2_BANGKOK_ESCAPE_UNDETECTED_NAME",
                    "ImageName": "images/challenges/DMP2/escape_complete_undetected.jpg",
                    "Description": "UI_CHALLENGES_DMP2_BANGKOK_ESCAPE_UNDETECTED_DESC",
                    "Rewards": {
                        "MasteryXP": 5000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
                    "Icon": "challenge_category_feats",
                    "LocationId": "LOCATION_PARENT_BANGKOK",
                    "ParentLocationId": "LOCATION_PARENT_BANGKOK",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "exit_gate": {
                                    "Transition": "Success"
                                },
                                "Spotted": {
                                    "Transition": "Failure"
                                }

                            }
                        }
                    },
                    "Tags": ["story", "feats"],
                    "InclusionData": {
                        "ContractIds": ["afba7d2c-0a57-4481-bf91-2a3019b66729"]
                    }
                },
                ///target get poisoned from sushi
                {
                    "Id": "a2ea834c-703a-4628-b4ba-e2cc1c1e2e43",
                    "Name": "UI_CHALLENGES_DMP2_MUMBAI_POISONTARGET_NAME",
                    "ImageName": "images/challenges/DMP2/mumbai_poison_layton_cane.jpg",
                    "Description": "UI_CHALLENGES_DMP2_MUMBAI_POISONTARGET_DESC",
                    "Rewards": {
                        "MasteryXP": 3000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
                    "Icon": "challenge_category_feats",
                    "LocationId": "LOCATION_PARENT_MUMBAI",
                    "ParentLocationId": "LOCATION_PARENT_MUMBAI",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {    
                                    "Kill": {
                                        "Condition": {
                                         "$and": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "20715eb7-e8b5-443c-a316-fa1edd0954e0"
                                            ],
                                            "$eq": [
                                                "$Value.KillMethodStrict",
                                                "consumed_poison"
                                            ]
                                        }
                                        },
                                        "Transition": "Success"
                                    },
                                    "Actorsick": {
                                        "Condition": {
                                            "$and": {
                                               "$eq": [
                                                   "$Value.setpiece_R_ID",
                                                   "b44c5367-0f83-4f35-90db-e50ec780e3e8"
                                               ],
                                               "$eq": [
                                                   "$Value.actor_R_ID",
                                                   "20715eb7-e8b5-443c-a316-fa1edd0954e0"
                                               ]
                                            }
                                           },
                                           "Transition": "Success"
                                    }
                            }
                        }
                    },
                    "Tags": ["story", "feats"],
                    "InclusionData": {
                        "ContractIds": ["d658bdf0-183d-463f-a479-235901912422"]
                    }
                },
                ///target was drowned
                //add mumbai challenge: Brothers Betrayed kill Flamingo guy in his disguise
                {
                    "Id": "29e790f8-e0c2-44a3-bf6d-86a4039bed2c",
                    "Name": "UI_CHALLENGES_DMP2_MUMBAI_KILLFLAMINGO_NAME",
                    "ImageName": "images/challenges/DMP2/mumbai_kill_flamingo.jpg",
                    "Description": "UI_CHALLENGES_DMP2_MUMBAI_KILLFLAMINGO_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": true,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_COMMUNITY",
                    "Icon": "challenge_category_feats",
                    "LocationId": "LOCATION_PARENT_MUMBAI",
                    "ParentLocationId": "LOCATION_PARENT_MUMBAI",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "session",
                        "States": {
                            "Start": {
                                    "Disguise": {
                                        "Condition": {
                                            "$eq": [
                                                "$Value",
                                                "124d145e-469e-485d-a628-ced82ddf1b75"
                                            ]
                                        },
                                        "Transition": "KillBrother"
                                    }     
                            },
                            "KillBrother": {
                                "Kill": {
                                    "Condition": {
                                        "$and": {
                                           "$eq": [
                                               "$Value.RepositoryId",
                                               "f883767d-c599-40bc-83d5-5c003a5350cd"
                                           ],
                                           "$eq": [
                                               "$Value.OutfitRepositoryId",
                                               "124d145e-469e-485d-a628-ced82ddf1b75"
                                           ]
                                       }
                                       },
                                       "Transition": "Success"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "feats"],
                    "InclusionData": {
                        "ContractIds": ["d658bdf0-183d-463f-a479-235901912422"]
                    }
                }
    ]
    module.exports = function DMP2n(controller) {
        if (!controller.smf.modIsInstalled ("Dinozafr.DMP2")) {
            log(LogLevel.ERROR, "[DMP 2] Currently not deployed")
            return
        }
        contracts.forEach((contract) => {
            controller.addMission(contract)
            controller.missionsInLocations[contract.Metadata.Location].push(contract.Metadata.Id)
        })
        const DMP2 = {
            Name: "UI_MENU_PAGE_DMP2_TITLE",
            Image: "",
            Type: "campaign",
            BackgroundImage:"images/story/dmp2_story.png",
            StoryData: [],
        }
    
        // When campaigns are requested, do our edits
        controller.hooks.contributeCampaigns.tap("DMP2-Campaign", (campaigns, gsmFunc, gsvFunc, gameVersion) => {
            if (DMP2.StoryData.length == 0) {
                contracts.forEach((mission) =>
                    DMP2.StoryData.push(gsmFunc(mission.Metadata.Id, gameVersion))
                )
            }
    
            // Add the campaign to the menu
            switch (gameVersion) {
                case "h3":
                    campaigns.forEach((menu) => {
                        if (menu.Name === "UI_MENU_PAGE_DMP2_TITLE") {
                            menu.Subgroups.push(DMP2)
                        }
                    })
                    break
            }
        })
        controller.configManager.configs.Entrances["assembly:/_pro/scenes/missions/bangkok/_scene_mission_tiger_upload.entity"] = [
            "57e5073f-b4e6-4717-a8db-cbc94cb51087"
        ]
        controller.configManager.configs.AgencyPickups["assembly:/_pro/scenes/missions/bangkok/_scene_mission_tiger_upload.entity"] = [
        ]
        for (const challenge of assanationschallenges) {
            controller.challengeService.registerChallenge(challenge, "assassination", challenge.ParentLocationId, "h3")
        }
        for (const challenge of discoverychallenges) {
            controller.challengeService.registerChallenge(challenge, "discovery", challenge.ParentLocationId, "h3")
        }
        for (const challenge of targetschallenges) {
            controller.challengeService.registerChallenge(challenge, "targets", challenge.ParentLocationId, "h3")
        }
        for (const challenge of featsschallenges) {
            controller.challengeService.registerChallenge(challenge, "feats", challenge.ParentLocationId, "h3")
        }
        log(LogLevel.INFO, "[DMP 2] Plugin successfully loaded.")
    }
/// Add later challanges for Mumbai, Bangkok
/// Mumbai Challanges: kill target by poison and drown #2 kill Flamingo man
// Bangkok challanges: complete mission without get Spotted #2 kill Flamingo
/// Sapienza challanges: start meeting with target
 /// add 6 contracts for plugin and remove string about peacock integrations in contracts (done)