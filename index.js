module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "POGOProtos",
    "messages": [
        {
            "name": "Data",
            "fields": [],
            "messages": [
                {
                    "name": "AssetDigestEntry",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "assetId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "bundleName",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "version",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "checksum",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "size",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "key",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "PokemonData",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "fixed64",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "Enums.PokemonId",
                            "name": "pokemonId",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "cp",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "stamina",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "staminaMax",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "Enums.PokemonMove",
                            "name": "move_1",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "Enums.PokemonMove",
                            "name": "move_2",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "deployedFortId",
                            "id": 8
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "ownerName",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "isEgg",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "eggKmWalkedTarget",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "eggKmWalkedStart",
                            "id": 12
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "origin",
                            "id": 14
                        },
                        {
                            "rule": "optional",
                            "type": "float",
                            "name": "heightM",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "float",
                            "name": "weightKg",
                            "id": 16
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "individualAttack",
                            "id": 17
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "individualDefense",
                            "id": 18
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "individualStamina",
                            "id": 19
                        },
                        {
                            "rule": "optional",
                            "type": "float",
                            "name": "cpMultiplier",
                            "id": 20
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "pokeball",
                            "id": 21
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "capturedCellId",
                            "id": 22
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "battlesAttacked",
                            "id": 23
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "battlesDefended",
                            "id": 24
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "eggIncubatorId",
                            "id": 25
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "creationTimeMs",
                            "id": 26
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "numUpgrades",
                            "id": 27
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "additionalCpMultiplier",
                            "id": 28
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "favorite",
                            "id": 29
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "nickname",
                            "id": 30
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "fromFort",
                            "id": 31
                        }
                    ]
                },
                {
                    "name": "DownloadUrlEntry",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "assetId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "url",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "size",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "checksum",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "PlayerBadge",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Enums.BadgeType",
                            "name": "badgeType",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "rank",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "startValue",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "endValue",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "currentValue",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "PlayerData",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "creationTimestampMs",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "username",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "team",
                            "id": 5
                        },
                        {
                            "rule": "repeated",
                            "type": "Enums.TutorialState",
                            "name": "tutorialState",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "Player.PlayerAvatar",
                            "name": "avatar",
                            "id": 8
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "maxPokemonStorage",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "maxItemStorage",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "Player.DailyBonus",
                            "name": "dailyBonus",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "Player.EquippedBadge",
                            "name": "equippedBadge",
                            "id": 12
                        },
                        {
                            "rule": "optional",
                            "type": "Player.ContactSettings",
                            "name": "contactSettings",
                            "id": 13
                        },
                        {
                            "rule": "repeated",
                            "type": "Player.Currency",
                            "name": "currencies",
                            "id": 14
                        }
                    ]
                },
                {
                    "name": "PokedexEntry",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Enums.PokemonId",
                            "name": "pokemonId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "timesEncountered",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "timesCaptured",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "evolutionStonePieces",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "evolutionStones",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "Player",
                    "fields": [],
                    "messages": [
                        {
                            "name": "PlayerAvatar",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "skin",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "hair",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "shirt",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pants",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "hat",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "shoes",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.Gender",
                                    "name": "gender",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "eyes",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "backpack",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "PlayerPublicProfile",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "level",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "PlayerAvatar",
                                    "name": "avatar",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "ContactSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "sendMarketingEmails",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "sendPushNotifications",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "Currency",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "amount",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "DailyBonus",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "nextCollectedTimestampMs",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "nextDefenderBonusCollectTimestampMs",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "EquippedBadge",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Enums.BadgeType",
                                    "name": "badgeType",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "level",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "nextEquipChangeAllowedTimestampMs",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "PlayerCamera",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "isDefaultCamera",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "PlayerCurrency",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "gems",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "PlayerStats",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "level",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "experience",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "prevLevelXp",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "nextLevelXp",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "kmWalked",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pokemonsEncountered",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "uniquePokedexEntries",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pokemonsCaptured",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "evolutions",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pokeStopVisits",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pokeballsThrown",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "eggsHatched",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "bigMagikarpCaught",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "battleAttackWon",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "battleAttackTotal",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "battleDefendedWon",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "battleTrainingWon",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "battleTrainingTotal",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "prestigeRaisedTotal",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "prestigeDroppedTotal",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pokemonDeployed",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "bytes",
                                    "name": "pokemonCaughtByType",
                                    "id": 22
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "smallRattataCaught",
                                    "id": 23
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Gym",
                    "fields": [],
                    "messages": [
                        {
                            "name": "GymMembership",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "PokemonData",
                                    "name": "pokemonData",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Player.PlayerPublicProfile",
                                    "name": "trainerPublicProfile",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "GymState",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Map.Fort.FortData",
                                    "name": "fortData",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "GymMembership",
                                    "name": "memberships",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Battle",
                    "fields": [],
                    "messages": [
                        {
                            "name": "BattlePokemonInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "PokemonData",
                                    "name": "pokemonData",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "currentHealth",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "currentEnergy",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "BattleParticipant",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "BattlePokemonInfo",
                                    "name": "activePokemon",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Player.PlayerPublicProfile",
                                    "name": "trainerPublicProfile",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "BattlePokemonInfo",
                                    "name": "reversePokemon",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "BattlePokemonInfo",
                                    "name": "defeatedPokemon",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "BattleResults",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Gym.GymState",
                                    "name": "gymState",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "BattleParticipant",
                                    "name": "attackers",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "playerExperienceAwarded",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "nextDefenderPokemonId",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "gymPointsDelta",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "BattleAction",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "BattleActionType",
                                    "name": "Type",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "actionStartMs",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "durationMs",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "energyDelta",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "attackerIndex",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "targetIndex",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "activePokemonId",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "BattleParticipant",
                                    "name": "playerJoined",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "BattleResults",
                                    "name": "battleResults",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "damageWindowsStartTimestampMss",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "damageWindowsEndTimestampMss",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "BattleParticipant",
                                    "name": "playerLeft",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "targetPokemonId",
                                    "id": 14
                                }
                            ]
                        },
                        {
                            "name": "BattleLog",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "BattleState",
                                    "name": "state",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "BattleType",
                                    "name": "battleType",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "serverMs",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "BattleAction",
                                    "name": "battleActions",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "battleStartTimestampMs",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "battleEndTimestampMs",
                                    "id": 6
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "BattleActionType",
                            "values": [
                                {
                                    "name": "ACTION_UNSET",
                                    "id": 0
                                },
                                {
                                    "name": "ACTION_ATTACK",
                                    "id": 1
                                },
                                {
                                    "name": "ACTION_DODGE",
                                    "id": 2
                                },
                                {
                                    "name": "ACTION_SPECIAL_ATTACK",
                                    "id": 3
                                },
                                {
                                    "name": "ACTION_SWAP_POKEMON",
                                    "id": 4
                                },
                                {
                                    "name": "ACTION_FAINT",
                                    "id": 5
                                },
                                {
                                    "name": "ACTION_PLAYER_JOIN",
                                    "id": 6
                                },
                                {
                                    "name": "ACTION_PLAYER_QUIT",
                                    "id": 7
                                },
                                {
                                    "name": "ACTION_VICTORY",
                                    "id": 8
                                },
                                {
                                    "name": "ACTION_DEFEAT",
                                    "id": 9
                                },
                                {
                                    "name": "ACTION_TIMED_OUT",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "BattleState",
                            "values": [
                                {
                                    "name": "STATE_UNSET",
                                    "id": 0
                                },
                                {
                                    "name": "ACTIVE",
                                    "id": 1
                                },
                                {
                                    "name": "VICTORY",
                                    "id": 2
                                },
                                {
                                    "name": "DEFEATED",
                                    "id": 3
                                },
                                {
                                    "name": "TIMED_OUT",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "BattleType",
                            "values": [
                                {
                                    "name": "BATTLE_TYPE_UNSET",
                                    "id": 0
                                },
                                {
                                    "name": "NORMAL",
                                    "id": 1
                                },
                                {
                                    "name": "TRAINING",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Capture",
                    "fields": [],
                    "messages": [
                        {
                            "name": "CaptureAward",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Enums.ActivityType",
                                    "name": "activityType",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "xp",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "candy",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "stardust",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "CaptureProbability",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Inventory.ItemId",
                                    "name": "pokeballType",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "captureProbability",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "reticleDifficultyScale",
                                    "id": 12
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Enums",
            "fields": [],
            "enums": [
                {
                    "name": "PokemonId",
                    "values": [
                        {
                            "name": "MISSINGNO",
                            "id": 0
                        },
                        {
                            "name": "BULBASAUR",
                            "id": 1
                        },
                        {
                            "name": "IVYSAUR",
                            "id": 2
                        },
                        {
                            "name": "VENUSAUR",
                            "id": 3
                        },
                        {
                            "name": "CHARMANDER",
                            "id": 4
                        },
                        {
                            "name": "CHARMELEON",
                            "id": 5
                        },
                        {
                            "name": "CHARIZARD",
                            "id": 6
                        },
                        {
                            "name": "SQUIRTLE",
                            "id": 7
                        },
                        {
                            "name": "WARTORTLE",
                            "id": 8
                        },
                        {
                            "name": "BLASTOISE",
                            "id": 9
                        },
                        {
                            "name": "CATERPIE",
                            "id": 10
                        },
                        {
                            "name": "METAPOD",
                            "id": 11
                        },
                        {
                            "name": "BUTTERFREE",
                            "id": 12
                        },
                        {
                            "name": "WEEDLE",
                            "id": 13
                        },
                        {
                            "name": "KAKUNA",
                            "id": 14
                        },
                        {
                            "name": "BEEDRILL",
                            "id": 15
                        },
                        {
                            "name": "PIDGEY",
                            "id": 16
                        },
                        {
                            "name": "PIDGEOTTO",
                            "id": 17
                        },
                        {
                            "name": "PIDGEOT",
                            "id": 18
                        },
                        {
                            "name": "RATTATA",
                            "id": 19
                        },
                        {
                            "name": "RATICATE",
                            "id": 20
                        },
                        {
                            "name": "SPEAROW",
                            "id": 21
                        },
                        {
                            "name": "FEAROW",
                            "id": 22
                        },
                        {
                            "name": "EKANS",
                            "id": 23
                        },
                        {
                            "name": "ARBOK",
                            "id": 24
                        },
                        {
                            "name": "PIKACHU",
                            "id": 25
                        },
                        {
                            "name": "RAICHU",
                            "id": 26
                        },
                        {
                            "name": "SANDSHREW",
                            "id": 27
                        },
                        {
                            "name": "SANDSLASH",
                            "id": 28
                        },
                        {
                            "name": "NIDORAN_FEMALE",
                            "id": 29
                        },
                        {
                            "name": "NIDORINA",
                            "id": 30
                        },
                        {
                            "name": "NIDOQUEEN",
                            "id": 31
                        },
                        {
                            "name": "NIDORAN_MALE",
                            "id": 32
                        },
                        {
                            "name": "NIDORINO",
                            "id": 33
                        },
                        {
                            "name": "NIDOKING",
                            "id": 34
                        },
                        {
                            "name": "CLEFAIRY",
                            "id": 35
                        },
                        {
                            "name": "CLEFABLE",
                            "id": 36
                        },
                        {
                            "name": "VULPIX",
                            "id": 37
                        },
                        {
                            "name": "NINETALES",
                            "id": 38
                        },
                        {
                            "name": "JIGGLYPUFF",
                            "id": 39
                        },
                        {
                            "name": "WIGGLYTUFF",
                            "id": 40
                        },
                        {
                            "name": "ZUBAT",
                            "id": 41
                        },
                        {
                            "name": "GOLBAT",
                            "id": 42
                        },
                        {
                            "name": "ODDISH",
                            "id": 43
                        },
                        {
                            "name": "GLOOM",
                            "id": 44
                        },
                        {
                            "name": "VILEPLUME",
                            "id": 45
                        },
                        {
                            "name": "PARAS",
                            "id": 46
                        },
                        {
                            "name": "PARASECT",
                            "id": 47
                        },
                        {
                            "name": "VENONAT",
                            "id": 48
                        },
                        {
                            "name": "VENOMOTH",
                            "id": 49
                        },
                        {
                            "name": "DIGLETT",
                            "id": 50
                        },
                        {
                            "name": "DUGTRIO",
                            "id": 51
                        },
                        {
                            "name": "MEOWTH",
                            "id": 52
                        },
                        {
                            "name": "PERSIAN",
                            "id": 53
                        },
                        {
                            "name": "PSYDUCK",
                            "id": 54
                        },
                        {
                            "name": "GOLDUCK",
                            "id": 55
                        },
                        {
                            "name": "MANKEY",
                            "id": 56
                        },
                        {
                            "name": "PRIMEAPE",
                            "id": 57
                        },
                        {
                            "name": "GROWLITHE",
                            "id": 58
                        },
                        {
                            "name": "ARCANINE",
                            "id": 59
                        },
                        {
                            "name": "POLIWAG",
                            "id": 60
                        },
                        {
                            "name": "POLIWHIRL",
                            "id": 61
                        },
                        {
                            "name": "POLIWRATH",
                            "id": 62
                        },
                        {
                            "name": "ABRA",
                            "id": 63
                        },
                        {
                            "name": "KADABRA",
                            "id": 64
                        },
                        {
                            "name": "ALAKAZAM",
                            "id": 65
                        },
                        {
                            "name": "MACHOP",
                            "id": 66
                        },
                        {
                            "name": "MACHOKE",
                            "id": 67
                        },
                        {
                            "name": "MACHAMP",
                            "id": 68
                        },
                        {
                            "name": "BELLSPROUT",
                            "id": 69
                        },
                        {
                            "name": "WEEPINBELL",
                            "id": 70
                        },
                        {
                            "name": "VICTREEBEL",
                            "id": 71
                        },
                        {
                            "name": "TENTACOOL",
                            "id": 72
                        },
                        {
                            "name": "TENTACRUEL",
                            "id": 73
                        },
                        {
                            "name": "GEODUDE",
                            "id": 74
                        },
                        {
                            "name": "GRAVELER",
                            "id": 75
                        },
                        {
                            "name": "GOLEM",
                            "id": 76
                        },
                        {
                            "name": "PONYTA",
                            "id": 77
                        },
                        {
                            "name": "RAPIDASH",
                            "id": 78
                        },
                        {
                            "name": "SLOWPOKE",
                            "id": 79
                        },
                        {
                            "name": "SLOWBRO",
                            "id": 80
                        },
                        {
                            "name": "MAGNEMITE",
                            "id": 81
                        },
                        {
                            "name": "MAGNETON",
                            "id": 82
                        },
                        {
                            "name": "FARFETCHD",
                            "id": 83
                        },
                        {
                            "name": "DODUO",
                            "id": 84
                        },
                        {
                            "name": "DODRIO",
                            "id": 85
                        },
                        {
                            "name": "SEEL",
                            "id": 86
                        },
                        {
                            "name": "DEWGONG",
                            "id": 87
                        },
                        {
                            "name": "GRIMER",
                            "id": 88
                        },
                        {
                            "name": "MUK",
                            "id": 89
                        },
                        {
                            "name": "SHELLDER",
                            "id": 90
                        },
                        {
                            "name": "CLOYSTER",
                            "id": 91
                        },
                        {
                            "name": "GASTLY",
                            "id": 92
                        },
                        {
                            "name": "HAUNTER",
                            "id": 93
                        },
                        {
                            "name": "GENGAR",
                            "id": 94
                        },
                        {
                            "name": "ONIX",
                            "id": 95
                        },
                        {
                            "name": "DROWZEE",
                            "id": 96
                        },
                        {
                            "name": "HYPNO",
                            "id": 97
                        },
                        {
                            "name": "KRABBY",
                            "id": 98
                        },
                        {
                            "name": "KINGLER",
                            "id": 99
                        },
                        {
                            "name": "VOLTORB",
                            "id": 100
                        },
                        {
                            "name": "ELECTRODE",
                            "id": 101
                        },
                        {
                            "name": "EXEGGCUTE",
                            "id": 102
                        },
                        {
                            "name": "EXEGGUTOR",
                            "id": 103
                        },
                        {
                            "name": "CUBONE",
                            "id": 104
                        },
                        {
                            "name": "MAROWAK",
                            "id": 105
                        },
                        {
                            "name": "HITMONLEE",
                            "id": 106
                        },
                        {
                            "name": "HITMONCHAN",
                            "id": 107
                        },
                        {
                            "name": "LICKITUNG",
                            "id": 108
                        },
                        {
                            "name": "KOFFING",
                            "id": 109
                        },
                        {
                            "name": "WEEZING",
                            "id": 110
                        },
                        {
                            "name": "RHYHORN",
                            "id": 111
                        },
                        {
                            "name": "RHYDON",
                            "id": 112
                        },
                        {
                            "name": "CHANSEY",
                            "id": 113
                        },
                        {
                            "name": "TANGELA",
                            "id": 114
                        },
                        {
                            "name": "KANGASKHAN",
                            "id": 115
                        },
                        {
                            "name": "HORSEA",
                            "id": 116
                        },
                        {
                            "name": "SEADRA",
                            "id": 117
                        },
                        {
                            "name": "GOLDEEN",
                            "id": 118
                        },
                        {
                            "name": "SEAKING",
                            "id": 119
                        },
                        {
                            "name": "STARYU",
                            "id": 120
                        },
                        {
                            "name": "STARMIE",
                            "id": 121
                        },
                        {
                            "name": "MR_MIME",
                            "id": 122
                        },
                        {
                            "name": "SCYTHER",
                            "id": 123
                        },
                        {
                            "name": "JYNX",
                            "id": 124
                        },
                        {
                            "name": "ELECTABUZZ",
                            "id": 125
                        },
                        {
                            "name": "MAGMAR",
                            "id": 126
                        },
                        {
                            "name": "PINSIR",
                            "id": 127
                        },
                        {
                            "name": "TAUROS",
                            "id": 128
                        },
                        {
                            "name": "MAGIKARP",
                            "id": 129
                        },
                        {
                            "name": "GYARADOS",
                            "id": 130
                        },
                        {
                            "name": "LAPRAS",
                            "id": 131
                        },
                        {
                            "name": "DITTO",
                            "id": 132
                        },
                        {
                            "name": "EEVEE",
                            "id": 133
                        },
                        {
                            "name": "VAPOREON",
                            "id": 134
                        },
                        {
                            "name": "JOLTEON",
                            "id": 135
                        },
                        {
                            "name": "FLAREON",
                            "id": 136
                        },
                        {
                            "name": "PORYGON",
                            "id": 137
                        },
                        {
                            "name": "OMANYTE",
                            "id": 138
                        },
                        {
                            "name": "OMASTAR",
                            "id": 139
                        },
                        {
                            "name": "KABUTO",
                            "id": 140
                        },
                        {
                            "name": "KABUTOPS",
                            "id": 141
                        },
                        {
                            "name": "AERODACTYL",
                            "id": 142
                        },
                        {
                            "name": "SNORLAX",
                            "id": 143
                        },
                        {
                            "name": "ARTICUNO",
                            "id": 144
                        },
                        {
                            "name": "ZAPDOS",
                            "id": 145
                        },
                        {
                            "name": "MOLTRES",
                            "id": 146
                        },
                        {
                            "name": "DRATINI",
                            "id": 147
                        },
                        {
                            "name": "DRAGONAIR",
                            "id": 148
                        },
                        {
                            "name": "DRAGONITE",
                            "id": 149
                        },
                        {
                            "name": "MEWTWO",
                            "id": 150
                        },
                        {
                            "name": "MEW",
                            "id": 151
                        }
                    ]
                },
                {
                    "name": "TeamColor",
                    "values": [
                        {
                            "name": "NEUTRAL",
                            "id": 0
                        },
                        {
                            "name": "BLUE",
                            "id": 1
                        },
                        {
                            "name": "RED",
                            "id": 2
                        },
                        {
                            "name": "YELLOW",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "PokemonMove",
                    "values": [
                        {
                            "name": "MOVE_UNSET",
                            "id": 0
                        },
                        {
                            "name": "THUNDER_SHOCK",
                            "id": 1
                        },
                        {
                            "name": "QUICK_ATTACK",
                            "id": 2
                        },
                        {
                            "name": "SCRATCH",
                            "id": 3
                        },
                        {
                            "name": "EMBER",
                            "id": 4
                        },
                        {
                            "name": "VINE_WHIP",
                            "id": 5
                        },
                        {
                            "name": "TACKLE",
                            "id": 6
                        },
                        {
                            "name": "RAZOR_LEAF",
                            "id": 7
                        },
                        {
                            "name": "TAKE_DOWN",
                            "id": 8
                        },
                        {
                            "name": "WATER_GUN",
                            "id": 9
                        },
                        {
                            "name": "BITE",
                            "id": 10
                        },
                        {
                            "name": "POUND",
                            "id": 11
                        },
                        {
                            "name": "DOUBLE_SLAP",
                            "id": 12
                        },
                        {
                            "name": "WRAP",
                            "id": 13
                        },
                        {
                            "name": "HYPER_BEAM",
                            "id": 14
                        },
                        {
                            "name": "LICK",
                            "id": 15
                        },
                        {
                            "name": "DARK_PULSE",
                            "id": 16
                        },
                        {
                            "name": "SMOG",
                            "id": 17
                        },
                        {
                            "name": "SLUDGE",
                            "id": 18
                        },
                        {
                            "name": "METAL_CLAW",
                            "id": 19
                        },
                        {
                            "name": "VICE_GRIP",
                            "id": 20
                        },
                        {
                            "name": "FLAME_WHEEL",
                            "id": 21
                        },
                        {
                            "name": "MEGAHORN",
                            "id": 22
                        },
                        {
                            "name": "WING_ATTACK",
                            "id": 23
                        },
                        {
                            "name": "FLAMETHROWER",
                            "id": 24
                        },
                        {
                            "name": "SUCKER_PUNCH",
                            "id": 25
                        },
                        {
                            "name": "DIG",
                            "id": 26
                        },
                        {
                            "name": "LOW_KICK",
                            "id": 27
                        },
                        {
                            "name": "CROSS_CHOP",
                            "id": 28
                        },
                        {
                            "name": "PSYCHO_CUT",
                            "id": 29
                        },
                        {
                            "name": "PSYBEAM",
                            "id": 30
                        },
                        {
                            "name": "EARTHQUAKE",
                            "id": 31
                        },
                        {
                            "name": "STONE_EDGE",
                            "id": 32
                        },
                        {
                            "name": "ICE_PUNCH",
                            "id": 33
                        },
                        {
                            "name": "HEART_STAMP",
                            "id": 34
                        },
                        {
                            "name": "DISCHARGE",
                            "id": 35
                        },
                        {
                            "name": "FLASH_CANNON",
                            "id": 36
                        },
                        {
                            "name": "PECK",
                            "id": 37
                        },
                        {
                            "name": "DRILL_PECK",
                            "id": 38
                        },
                        {
                            "name": "ICE_BEAM",
                            "id": 39
                        },
                        {
                            "name": "BLIZZARD",
                            "id": 40
                        },
                        {
                            "name": "AIR_SLASH",
                            "id": 41
                        },
                        {
                            "name": "HEAT_WAVE",
                            "id": 42
                        },
                        {
                            "name": "TWINEEDLE",
                            "id": 43
                        },
                        {
                            "name": "POISON_JAB",
                            "id": 44
                        },
                        {
                            "name": "AERIAL_ACE",
                            "id": 45
                        },
                        {
                            "name": "DRILL_RUN",
                            "id": 46
                        },
                        {
                            "name": "PETAL_BLIZZARD",
                            "id": 47
                        },
                        {
                            "name": "MEGA_DRAIN",
                            "id": 48
                        },
                        {
                            "name": "BUG_BUZZ",
                            "id": 49
                        },
                        {
                            "name": "POISON_FANG",
                            "id": 50
                        },
                        {
                            "name": "NIGHT_SLASH",
                            "id": 51
                        },
                        {
                            "name": "SLASH",
                            "id": 52
                        },
                        {
                            "name": "BUBBLE_BEAM",
                            "id": 53
                        },
                        {
                            "name": "SUBMISSION",
                            "id": 54
                        },
                        {
                            "name": "KARATE_CHOP",
                            "id": 55
                        },
                        {
                            "name": "LOW_SWEEP",
                            "id": 56
                        },
                        {
                            "name": "AQUA_JET",
                            "id": 57
                        },
                        {
                            "name": "AQUA_TAIL",
                            "id": 58
                        },
                        {
                            "name": "SEED_BOMB",
                            "id": 59
                        },
                        {
                            "name": "PSYSHOCK",
                            "id": 60
                        },
                        {
                            "name": "ROCK_THROW",
                            "id": 61
                        },
                        {
                            "name": "ANCIENT_POWER",
                            "id": 62
                        },
                        {
                            "name": "ROCK_TOMB",
                            "id": 63
                        },
                        {
                            "name": "ROCK_SLIDE",
                            "id": 64
                        },
                        {
                            "name": "POWER_GEM",
                            "id": 65
                        },
                        {
                            "name": "SHADOW_SNEAK",
                            "id": 66
                        },
                        {
                            "name": "SHADOW_PUNCH",
                            "id": 67
                        },
                        {
                            "name": "SHADOW_CLAW",
                            "id": 68
                        },
                        {
                            "name": "OMINOUS_WIND",
                            "id": 69
                        },
                        {
                            "name": "SHADOW_BALL",
                            "id": 70
                        },
                        {
                            "name": "BULLET_PUNCH",
                            "id": 71
                        },
                        {
                            "name": "MAGNET_BOMB",
                            "id": 72
                        },
                        {
                            "name": "STEEL_WING",
                            "id": 73
                        },
                        {
                            "name": "IRON_HEAD",
                            "id": 74
                        },
                        {
                            "name": "PARABOLIC_CHARGE",
                            "id": 75
                        },
                        {
                            "name": "SPARK",
                            "id": 76
                        },
                        {
                            "name": "THUNDER_PUNCH",
                            "id": 77
                        },
                        {
                            "name": "THUNDER",
                            "id": 78
                        },
                        {
                            "name": "THUNDERBOLT",
                            "id": 79
                        },
                        {
                            "name": "TWISTER",
                            "id": 80
                        },
                        {
                            "name": "DRAGON_BREATH",
                            "id": 81
                        },
                        {
                            "name": "DRAGON_PULSE",
                            "id": 82
                        },
                        {
                            "name": "DRAGON_CLAW",
                            "id": 83
                        },
                        {
                            "name": "DISARMING_VOICE",
                            "id": 84
                        },
                        {
                            "name": "DRAINING_KISS",
                            "id": 85
                        },
                        {
                            "name": "DAZZLING_GLEAM",
                            "id": 86
                        },
                        {
                            "name": "MOONBLAST",
                            "id": 87
                        },
                        {
                            "name": "PLAY_ROUGH",
                            "id": 88
                        },
                        {
                            "name": "CROSS_POISON",
                            "id": 89
                        },
                        {
                            "name": "SLUDGE_BOMB",
                            "id": 90
                        },
                        {
                            "name": "SLUDGE_WAVE",
                            "id": 91
                        },
                        {
                            "name": "GUNK_SHOT",
                            "id": 92
                        },
                        {
                            "name": "MUD_SHOT",
                            "id": 93
                        },
                        {
                            "name": "BONE_CLUB",
                            "id": 94
                        },
                        {
                            "name": "BULLDOZE",
                            "id": 95
                        },
                        {
                            "name": "MUD_BOMB",
                            "id": 96
                        },
                        {
                            "name": "FURY_CUTTER",
                            "id": 97
                        },
                        {
                            "name": "BUG_BITE",
                            "id": 98
                        },
                        {
                            "name": "SIGNAL_BEAM",
                            "id": 99
                        },
                        {
                            "name": "X_SCISSOR",
                            "id": 100
                        },
                        {
                            "name": "FLAME_CHARGE",
                            "id": 101
                        },
                        {
                            "name": "FLAME_BURST",
                            "id": 102
                        },
                        {
                            "name": "FIRE_BLAST",
                            "id": 103
                        },
                        {
                            "name": "BRINE",
                            "id": 104
                        },
                        {
                            "name": "WATER_PULSE",
                            "id": 105
                        },
                        {
                            "name": "SCALD",
                            "id": 106
                        },
                        {
                            "name": "HYDRO_PUMP",
                            "id": 107
                        },
                        {
                            "name": "PSYCHIC",
                            "id": 108
                        },
                        {
                            "name": "PSYSTRIKE",
                            "id": 109
                        },
                        {
                            "name": "ICE_SHARD",
                            "id": 110
                        },
                        {
                            "name": "ICY_WIND",
                            "id": 111
                        },
                        {
                            "name": "FROST_BREATH",
                            "id": 112
                        },
                        {
                            "name": "ABSORB",
                            "id": 113
                        },
                        {
                            "name": "GIGA_DRAIN",
                            "id": 114
                        },
                        {
                            "name": "FIRE_PUNCH",
                            "id": 115
                        },
                        {
                            "name": "SOLAR_BEAM",
                            "id": 116
                        },
                        {
                            "name": "LEAF_BLADE",
                            "id": 117
                        },
                        {
                            "name": "POWER_WHIP",
                            "id": 118
                        },
                        {
                            "name": "SPLASH",
                            "id": 119
                        },
                        {
                            "name": "ACID",
                            "id": 120
                        },
                        {
                            "name": "AIR_CUTTER",
                            "id": 121
                        },
                        {
                            "name": "HURRICANE",
                            "id": 122
                        },
                        {
                            "name": "BRICK_BREAK",
                            "id": 123
                        },
                        {
                            "name": "CUT",
                            "id": 124
                        },
                        {
                            "name": "SWIFT",
                            "id": 125
                        },
                        {
                            "name": "HORN_ATTACK",
                            "id": 126
                        },
                        {
                            "name": "STOMP",
                            "id": 127
                        },
                        {
                            "name": "HEADBUTT",
                            "id": 128
                        },
                        {
                            "name": "HYPER_FANG",
                            "id": 129
                        },
                        {
                            "name": "SLAM",
                            "id": 130
                        },
                        {
                            "name": "BODY_SLAM",
                            "id": 131
                        },
                        {
                            "name": "REST",
                            "id": 132
                        },
                        {
                            "name": "STRUGGLE",
                            "id": 133
                        },
                        {
                            "name": "SCALD_BLASTOISE",
                            "id": 134
                        },
                        {
                            "name": "HYDRO_PUMP_BLASTOISE",
                            "id": 135
                        },
                        {
                            "name": "WRAP_GREEN",
                            "id": 136
                        },
                        {
                            "name": "WRAP_PINK",
                            "id": 137
                        },
                        {
                            "name": "FURY_CUTTER_FAST",
                            "id": 200
                        },
                        {
                            "name": "BUG_BITE_FAST",
                            "id": 201
                        },
                        {
                            "name": "BITE_FAST",
                            "id": 202
                        },
                        {
                            "name": "SUCKER_PUNCH_FAST",
                            "id": 203
                        },
                        {
                            "name": "DRAGON_BREATH_FAST",
                            "id": 204
                        },
                        {
                            "name": "THUNDER_SHOCK_FAST",
                            "id": 205
                        },
                        {
                            "name": "SPARK_FAST",
                            "id": 206
                        },
                        {
                            "name": "LOW_KICK_FAST",
                            "id": 207
                        },
                        {
                            "name": "KARATE_CHOP_FAST",
                            "id": 208
                        },
                        {
                            "name": "EMBER_FAST",
                            "id": 209
                        },
                        {
                            "name": "WING_ATTACK_FAST",
                            "id": 210
                        },
                        {
                            "name": "PECK_FAST",
                            "id": 211
                        },
                        {
                            "name": "LICK_FAST",
                            "id": 212
                        },
                        {
                            "name": "SHADOW_CLAW_FAST",
                            "id": 213
                        },
                        {
                            "name": "VINE_WHIP_FAST",
                            "id": 214
                        },
                        {
                            "name": "RAZOR_LEAF_FAST",
                            "id": 215
                        },
                        {
                            "name": "MUD_SHOT_FAST",
                            "id": 216
                        },
                        {
                            "name": "ICE_SHARD_FAST",
                            "id": 217
                        },
                        {
                            "name": "FROST_BREATH_FAST",
                            "id": 218
                        },
                        {
                            "name": "QUICK_ATTACK_FAST",
                            "id": 219
                        },
                        {
                            "name": "SCRATCH_FAST",
                            "id": 220
                        },
                        {
                            "name": "TACKLE_FAST",
                            "id": 221
                        },
                        {
                            "name": "POUND_FAST",
                            "id": 222
                        },
                        {
                            "name": "CUT_FAST",
                            "id": 223
                        },
                        {
                            "name": "POISON_JAB_FAST",
                            "id": 224
                        },
                        {
                            "name": "ACID_FAST",
                            "id": 225
                        },
                        {
                            "name": "PSYCHO_CUT_FAST",
                            "id": 226
                        },
                        {
                            "name": "ROCK_THROW_FAST",
                            "id": 227
                        },
                        {
                            "name": "METAL_CLAW_FAST",
                            "id": 228
                        },
                        {
                            "name": "BULLET_PUNCH_FAST",
                            "id": 229
                        },
                        {
                            "name": "WATER_GUN_FAST",
                            "id": 230
                        },
                        {
                            "name": "SPLASH_FAST",
                            "id": 231
                        },
                        {
                            "name": "WATER_GUN_FAST_BLASTOISE",
                            "id": 232
                        },
                        {
                            "name": "MUD_SLAP_FAST",
                            "id": 233
                        },
                        {
                            "name": "ZEN_HEADBUTT_FAST",
                            "id": 234
                        },
                        {
                            "name": "CONFUSION_FAST",
                            "id": 235
                        },
                        {
                            "name": "POISON_STING_FAST",
                            "id": 236
                        },
                        {
                            "name": "BUBBLE_FAST",
                            "id": 237
                        },
                        {
                            "name": "FEINT_ATTACK_FAST",
                            "id": 238
                        },
                        {
                            "name": "STEEL_WING_FAST",
                            "id": 239
                        },
                        {
                            "name": "FIRE_FANG_FAST",
                            "id": 240
                        },
                        {
                            "name": "ROCK_SMASH_FAST",
                            "id": 241
                        }
                    ]
                },
                {
                    "name": "Gender",
                    "values": [
                        {
                            "name": "MALE",
                            "id": 0
                        },
                        {
                            "name": "FEMALE",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "ActivityType",
                    "values": [
                        {
                            "name": "ACTIVITY_UNKNOWN",
                            "id": 0
                        },
                        {
                            "name": "ACTIVITY_CATCH_POKEMON",
                            "id": 1
                        },
                        {
                            "name": "ACTIVITY_CATCH_LEGEND_POKEMON",
                            "id": 2
                        },
                        {
                            "name": "ACTIVITY_FLEE_POKEMON",
                            "id": 3
                        },
                        {
                            "name": "ACTIVITY_DEFEAT_FORT",
                            "id": 4
                        },
                        {
                            "name": "ACTIVITY_EVOLVE_POKEMON",
                            "id": 5
                        },
                        {
                            "name": "ACTIVITY_HATCH_EGG",
                            "id": 6
                        },
                        {
                            "name": "ACTIVITY_WALK_KM",
                            "id": 7
                        },
                        {
                            "name": "ACTIVITY_POKEDEX_ENTRY_NEW",
                            "id": 8
                        },
                        {
                            "name": "ACTIVITY_CATCH_FIRST_THROW",
                            "id": 9
                        },
                        {
                            "name": "ACTIVITY_CATCH_NICE_THROW",
                            "id": 10
                        },
                        {
                            "name": "ACTIVITY_CATCH_GREAT_THROW",
                            "id": 11
                        },
                        {
                            "name": "ACTIVITY_CATCH_EXCELLENT_THROW",
                            "id": 12
                        },
                        {
                            "name": "ACTIVITY_CATCH_CURVEBALL",
                            "id": 13
                        },
                        {
                            "name": "ACTIVITY_CATCH_FIRST_CATCH_OF_DAY",
                            "id": 14
                        },
                        {
                            "name": "ACTIVITY_CATCH_MILESTONE",
                            "id": 15
                        },
                        {
                            "name": "ACTIVITY_TRAIN_POKEMON",
                            "id": 16
                        },
                        {
                            "name": "ACTIVITY_SEARCH_FORT",
                            "id": 17
                        },
                        {
                            "name": "ACTIVITY_RELEASE_POKEMON",
                            "id": 18
                        },
                        {
                            "name": "ACTIVITY_HATCH_EGG_SMALL_BONUS",
                            "id": 19
                        },
                        {
                            "name": "ACTIVITY_HATCH_EGG_MEDIUM_BONUS",
                            "id": 20
                        },
                        {
                            "name": "ACTIVITY_HATCH_EGG_LARGE_BONUS",
                            "id": 21
                        },
                        {
                            "name": "ACTIVITY_DEFEAT_GYM_DEFENDER",
                            "id": 22
                        },
                        {
                            "name": "ACTIVITY_DEFEAT_GYM_LEADER",
                            "id": 23
                        }
                    ]
                },
                {
                    "name": "BadgeType",
                    "values": [
                        {
                            "name": "BADGE_UNSET",
                            "id": 0
                        },
                        {
                            "name": "BADGE_TRAVEL_KM",
                            "id": 1
                        },
                        {
                            "name": "BADGE_POKEDEX_ENTRIES",
                            "id": 2
                        },
                        {
                            "name": "BADGE_CAPTURE_TOTAL",
                            "id": 3
                        },
                        {
                            "name": "BADGE_DEFEATED_FORT",
                            "id": 4
                        },
                        {
                            "name": "BADGE_EVOLVED_TOTAL",
                            "id": 5
                        },
                        {
                            "name": "BADGE_HATCHED_TOTAL",
                            "id": 6
                        },
                        {
                            "name": "BADGE_ENCOUNTERED_TOTAL",
                            "id": 7
                        },
                        {
                            "name": "BADGE_POKESTOPS_VISITED",
                            "id": 8
                        },
                        {
                            "name": "BADGE_UNIQUE_POKESTOPS",
                            "id": 9
                        },
                        {
                            "name": "BADGE_POKEBALL_THROWN",
                            "id": 10
                        },
                        {
                            "name": "BADGE_BIG_MAGIKARP",
                            "id": 11
                        },
                        {
                            "name": "BADGE_DEPLOYED_TOTAL",
                            "id": 12
                        },
                        {
                            "name": "BADGE_BATTLE_ATTACK_WON",
                            "id": 13
                        },
                        {
                            "name": "BADGE_BATTLE_TRAINING_WON",
                            "id": 14
                        },
                        {
                            "name": "BADGE_BATTLE_DEFEND_WON",
                            "id": 15
                        },
                        {
                            "name": "BADGE_PRESTIGE_RAISED",
                            "id": 16
                        },
                        {
                            "name": "BADGE_PRESTIGE_DROPPED",
                            "id": 17
                        },
                        {
                            "name": "BADGE_TYPE_NORMAL",
                            "id": 18
                        },
                        {
                            "name": "BADGE_TYPE_FIGHTING",
                            "id": 19
                        },
                        {
                            "name": "BADGE_TYPE_FLYING",
                            "id": 20
                        },
                        {
                            "name": "BADGE_TYPE_POISON",
                            "id": 21
                        },
                        {
                            "name": "BADGE_TYPE_GROUND",
                            "id": 22
                        },
                        {
                            "name": "BADGE_TYPE_ROCK",
                            "id": 23
                        },
                        {
                            "name": "BADGE_TYPE_BUG",
                            "id": 24
                        },
                        {
                            "name": "BADGE_TYPE_GHOST",
                            "id": 25
                        },
                        {
                            "name": "BADGE_TYPE_STEEL",
                            "id": 26
                        },
                        {
                            "name": "BADGE_TYPE_FIRE",
                            "id": 27
                        },
                        {
                            "name": "BADGE_TYPE_WATER",
                            "id": 28
                        },
                        {
                            "name": "BADGE_TYPE_GRASS",
                            "id": 29
                        },
                        {
                            "name": "BADGE_TYPE_ELECTRIC",
                            "id": 30
                        },
                        {
                            "name": "BADGE_TYPE_PSYCHIC",
                            "id": 31
                        },
                        {
                            "name": "BADGE_TYPE_ICE",
                            "id": 32
                        },
                        {
                            "name": "BADGE_TYPE_DRAGON",
                            "id": 33
                        },
                        {
                            "name": "BADGE_TYPE_DARK",
                            "id": 34
                        },
                        {
                            "name": "BADGE_TYPE_FAIRY",
                            "id": 35
                        },
                        {
                            "name": "BADGE_SMALL_RATTATA",
                            "id": 36
                        },
                        {
                            "name": "BADGE_PIKACHU",
                            "id": 37
                        }
                    ]
                },
                {
                    "name": "TutorialState",
                    "values": [
                        {
                            "name": "LEGAL_SCREEN",
                            "id": 0
                        },
                        {
                            "name": "AVATAR_SELECTION",
                            "id": 1
                        },
                        {
                            "name": "ACCOUNT_CREATION",
                            "id": 2
                        },
                        {
                            "name": "POKEMON_CAPTURE",
                            "id": 3
                        },
                        {
                            "name": "NAME_SELECTION",
                            "id": 4
                        },
                        {
                            "name": "POKEMON_BERRY",
                            "id": 5
                        },
                        {
                            "name": "USE_ITEM",
                            "id": 6
                        },
                        {
                            "name": "FIRST_TIME_EXPERIENCE_COMPLETE",
                            "id": 7
                        },
                        {
                            "name": "POKESTOP_TUTORIAL",
                            "id": 8
                        },
                        {
                            "name": "GYM_TUTORIAL",
                            "id": 9
                        }
                    ]
                },
                {
                    "name": "CameraInterpolation",
                    "values": [
                        {
                            "name": "CAM_INTERP_CUT",
                            "id": 0
                        },
                        {
                            "name": "CAM_INTERP_LINEAR",
                            "id": 1
                        },
                        {
                            "name": "CAM_INTERP_SMOOTH",
                            "id": 2
                        },
                        {
                            "name": "CAM_INTERP_SMOOTH_ROT_LINEAR_MOVE",
                            "id": 3
                        },
                        {
                            "name": "CAM_INTERP_DEPENDS",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "CameraTarget",
                    "values": [
                        {
                            "name": "CAM_TARGET_ATTACKER",
                            "id": 0
                        },
                        {
                            "name": "CAM_TARGET_ATTACKER_EDGE",
                            "id": 1
                        },
                        {
                            "name": "CAM_TARGET_ATTACKER_GROUND",
                            "id": 2
                        },
                        {
                            "name": "CAM_TARGET_DEFENDER",
                            "id": 3
                        },
                        {
                            "name": "CAM_TARGET_DEFENDER_EDGE",
                            "id": 4
                        },
                        {
                            "name": "CAM_TARGET_DEFENDER_GROUND",
                            "id": 5
                        },
                        {
                            "name": "CAM_TARGET_ATTACKER_DEFENDER",
                            "id": 6
                        },
                        {
                            "name": "CAM_TARGET_ATTACKER_DEFENDER_EDGE",
                            "id": 7
                        },
                        {
                            "name": "CAM_TARGET_DEFENDER_ATTACKER",
                            "id": 8
                        },
                        {
                            "name": "CAM_TARGET_DEFENDER_ATTACKER_EDGE",
                            "id": 9
                        },
                        {
                            "name": "CAM_TARGET_ATTACKER_DEFENDER_MIRROR",
                            "id": 11
                        },
                        {
                            "name": "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER",
                            "id": 12
                        },
                        {
                            "name": "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR",
                            "id": 13
                        },
                        {
                            "name": "CAM_TARGET_ATTACKER_DEFENDER_WORLD",
                            "id": 14
                        }
                    ]
                },
                {
                    "name": "HoloIapItemCategory",
                    "values": [
                        {
                            "name": "IAP_CATEGORY_NONE",
                            "id": 0
                        },
                        {
                            "name": "IAP_CATEGORY_BUNDLE",
                            "id": 1
                        },
                        {
                            "name": "IAP_CATEGORY_ITEMS",
                            "id": 2
                        },
                        {
                            "name": "IAP_CATEGORY_UPGRADES",
                            "id": 3
                        },
                        {
                            "name": "IAP_CATEGORY_POKECOINS",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "ItemCategory",
                    "values": [
                        {
                            "name": "ITEM_CATEGORY_NONE",
                            "id": 0
                        },
                        {
                            "name": "ITEM_CATEGORY_POKEBALL",
                            "id": 1
                        },
                        {
                            "name": "ITEM_CATEGORY_FOOD",
                            "id": 2
                        },
                        {
                            "name": "ITEM_CATEGORY_MEDICINE",
                            "id": 3
                        },
                        {
                            "name": "ITEM_CATEGORY_BOOST",
                            "id": 4
                        },
                        {
                            "name": "ITEM_CATEGORY_UTILITES",
                            "id": 5
                        },
                        {
                            "name": "ITEM_CATEGORY_CAMERA",
                            "id": 6
                        },
                        {
                            "name": "ITEM_CATEGORY_DISK",
                            "id": 7
                        },
                        {
                            "name": "ITEM_CATEGORY_INCUBATOR",
                            "id": 8
                        },
                        {
                            "name": "ITEM_CATEGORY_INCENSE",
                            "id": 9
                        },
                        {
                            "name": "ITEM_CATEGORY_XP_BOOST",
                            "id": 10
                        },
                        {
                            "name": "ITEM_CATEGORY_INVENTORY_UPGRADE",
                            "id": 11
                        }
                    ]
                },
                {
                    "name": "ItemEffect",
                    "values": [
                        {
                            "name": "ITEM_EFFECT_NONE",
                            "id": 0
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_NO_FLEE",
                            "id": 1000
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_NO_MOVEMENT",
                            "id": 1002
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_NO_THREAT",
                            "id": 1003
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_TARGET_MAX",
                            "id": 1004
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_TARGET_SLOW",
                            "id": 1005
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_NIGHT",
                            "id": 1006
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_TRAINER",
                            "id": 1007
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_FIRST_THROW",
                            "id": 1008
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_LEGEND",
                            "id": 1009
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_HEAVY",
                            "id": 1010
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_REPEAT",
                            "id": 1011
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_MULTI_THROW",
                            "id": 1012
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_ALWAYS",
                            "id": 1013
                        },
                        {
                            "name": "ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW",
                            "id": 1014
                        }
                    ]
                },
                {
                    "name": "Platform",
                    "values": [
                        {
                            "name": "UNSET",
                            "id": 0
                        },
                        {
                            "name": "IOS",
                            "id": 1
                        },
                        {
                            "name": "ANDROID",
                            "id": 2
                        },
                        {
                            "name": "OSX",
                            "id": 3
                        },
                        {
                            "name": "WINDOWS",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "PokemonClass",
                    "values": [
                        {
                            "name": "NORMAL",
                            "id": 0
                        },
                        {
                            "name": "LEGENDARY",
                            "id": 1
                        },
                        {
                            "name": "MYTHIC",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "PokemonFamilyId",
                    "values": [
                        {
                            "name": "FAMILY_UNSET",
                            "id": 0
                        },
                        {
                            "name": "FAMILY_BULBASAUR",
                            "id": 1
                        },
                        {
                            "name": "FAMILY_CHARMANDER",
                            "id": 4
                        },
                        {
                            "name": "FAMILY_SQUIRTLE",
                            "id": 7
                        },
                        {
                            "name": "FAMILY_CATERPIE",
                            "id": 10
                        },
                        {
                            "name": "FAMILY_WEEDLE",
                            "id": 13
                        },
                        {
                            "name": "FAMILY_PIDGEY",
                            "id": 16
                        },
                        {
                            "name": "FAMILY_RATTATA",
                            "id": 19
                        },
                        {
                            "name": "FAMILY_SPEAROW",
                            "id": 21
                        },
                        {
                            "name": "FAMILY_EKANS",
                            "id": 23
                        },
                        {
                            "name": "FAMILY_PIKACHU",
                            "id": 25
                        },
                        {
                            "name": "FAMILY_SANDSHREW",
                            "id": 27
                        },
                        {
                            "name": "FAMILY_NIDORAN_FEMALE",
                            "id": 29
                        },
                        {
                            "name": "FAMILY_NIDORAN_MALE",
                            "id": 32
                        },
                        {
                            "name": "FAMILY_CLEFAIRY",
                            "id": 35
                        },
                        {
                            "name": "FAMILY_VULPIX",
                            "id": 37
                        },
                        {
                            "name": "FAMILY_JIGGLYPUFF",
                            "id": 39
                        },
                        {
                            "name": "FAMILY_ZUBAT",
                            "id": 41
                        },
                        {
                            "name": "FAMILY_ODDISH",
                            "id": 43
                        },
                        {
                            "name": "FAMILY_PARAS",
                            "id": 46
                        },
                        {
                            "name": "FAMILY_VENONAT",
                            "id": 48
                        },
                        {
                            "name": "FAMILY_DIGLETT",
                            "id": 50
                        },
                        {
                            "name": "FAMILY_MEOWTH",
                            "id": 52
                        },
                        {
                            "name": "FAMILY_PSYDUCK",
                            "id": 54
                        },
                        {
                            "name": "FAMILY_MANKEY",
                            "id": 56
                        },
                        {
                            "name": "FAMILY_GROWLITHE",
                            "id": 58
                        },
                        {
                            "name": "FAMILY_POLIWAG",
                            "id": 60
                        },
                        {
                            "name": "FAMILY_ABRA",
                            "id": 63
                        },
                        {
                            "name": "FAMILY_MACHOP",
                            "id": 66
                        },
                        {
                            "name": "FAMILY_BELLSPROUT",
                            "id": 69
                        },
                        {
                            "name": "FAMILY_TENTACOOL",
                            "id": 72
                        },
                        {
                            "name": "FAMILY_GEODUDE",
                            "id": 74
                        },
                        {
                            "name": "FAMILY_PONYTA",
                            "id": 77
                        },
                        {
                            "name": "FAMILY_SLOWPOKE",
                            "id": 79
                        },
                        {
                            "name": "FAMILY_MAGNEMITE",
                            "id": 81
                        },
                        {
                            "name": "FAMILY_FARFETCHD",
                            "id": 83
                        },
                        {
                            "name": "FAMILY_DODUO",
                            "id": 84
                        },
                        {
                            "name": "FAMILY_SEEL",
                            "id": 86
                        },
                        {
                            "name": "FAMILY_GRIMER",
                            "id": 88
                        },
                        {
                            "name": "FAMILY_SHELLDER",
                            "id": 90
                        },
                        {
                            "name": "FAMILY_GASTLY",
                            "id": 92
                        },
                        {
                            "name": "FAMILY_ONIX",
                            "id": 95
                        },
                        {
                            "name": "FAMILY_DROWZEE",
                            "id": 96
                        },
                        {
                            "name": "FAMILY_HYPNO",
                            "id": 97
                        },
                        {
                            "name": "FAMILY_KRABBY",
                            "id": 98
                        },
                        {
                            "name": "FAMILY_VOLTORB",
                            "id": 100
                        },
                        {
                            "name": "FAMILY_EXEGGCUTE",
                            "id": 102
                        },
                        {
                            "name": "FAMILY_CUBONE",
                            "id": 104
                        },
                        {
                            "name": "FAMILY_HITMONLEE",
                            "id": 106
                        },
                        {
                            "name": "FAMILY_HITMONCHAN",
                            "id": 107
                        },
                        {
                            "name": "FAMILY_LICKITUNG",
                            "id": 108
                        },
                        {
                            "name": "FAMILY_KOFFING",
                            "id": 109
                        },
                        {
                            "name": "FAMILY_RHYHORN",
                            "id": 111
                        },
                        {
                            "name": "FAMILY_CHANSEY",
                            "id": 113
                        },
                        {
                            "name": "FAMILY_TANGELA",
                            "id": 114
                        },
                        {
                            "name": "FAMILY_KANGASKHAN",
                            "id": 115
                        },
                        {
                            "name": "FAMILY_HORSEA",
                            "id": 116
                        },
                        {
                            "name": "FAMILY_GOLDEEN",
                            "id": 118
                        },
                        {
                            "name": "FAMILY_STARYU",
                            "id": 120
                        },
                        {
                            "name": "FAMILY_MR_MIME",
                            "id": 122
                        },
                        {
                            "name": "FAMILY_SCYTHER",
                            "id": 123
                        },
                        {
                            "name": "FAMILY_JYNX",
                            "id": 124
                        },
                        {
                            "name": "FAMILY_ELECTABUZZ",
                            "id": 125
                        },
                        {
                            "name": "FAMILY_MAGMAR",
                            "id": 126
                        },
                        {
                            "name": "FAMILY_PINSIR",
                            "id": 127
                        },
                        {
                            "name": "FAMILY_TAUROS",
                            "id": 128
                        },
                        {
                            "name": "FAMILY_MAGIKARP",
                            "id": 129
                        },
                        {
                            "name": "FAMILY_LAPRAS",
                            "id": 131
                        },
                        {
                            "name": "FAMILY_DITTO",
                            "id": 132
                        },
                        {
                            "name": "FAMILY_EEVEE",
                            "id": 133
                        },
                        {
                            "name": "FAMILY_PORYGON",
                            "id": 137
                        },
                        {
                            "name": "FAMILY_OMANYTE",
                            "id": 138
                        },
                        {
                            "name": "FAMILY_KABUTO",
                            "id": 140
                        },
                        {
                            "name": "FAMILY_AERODACTYL",
                            "id": 142
                        },
                        {
                            "name": "FAMILY_SNORLAX",
                            "id": 143
                        },
                        {
                            "name": "FAMILY_ARTICUNO",
                            "id": 144
                        },
                        {
                            "name": "FAMILY_ZAPDOS",
                            "id": 145
                        },
                        {
                            "name": "FAMILY_MOLTRES",
                            "id": 146
                        },
                        {
                            "name": "FAMILY_DRATINI",
                            "id": 147
                        },
                        {
                            "name": "FAMILY_MEWTWO",
                            "id": 150
                        },
                        {
                            "name": "FAMILY_MEW",
                            "id": 151
                        }
                    ]
                },
                {
                    "name": "PokemonMovementType",
                    "values": [
                        {
                            "name": "MOVEMENT_STATIC",
                            "id": 0
                        },
                        {
                            "name": "MOVEMENT_JUMP",
                            "id": 1
                        },
                        {
                            "name": "MOVEMENT_VERTICAL",
                            "id": 2
                        },
                        {
                            "name": "MOVEMENT_PSYCHIC",
                            "id": 3
                        },
                        {
                            "name": "MOVEMENT_ELECTRIC",
                            "id": 4
                        },
                        {
                            "name": "MOVEMENT_FLYING",
                            "id": 5
                        },
                        {
                            "name": "MOVEMENT_HOVERING",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "PokemonType",
                    "values": [
                        {
                            "name": "POKEMON_TYPE_NONE",
                            "id": 0
                        },
                        {
                            "name": "POKEMON_TYPE_NORMAL",
                            "id": 1
                        },
                        {
                            "name": "POKEMON_TYPE_FIGHTING",
                            "id": 2
                        },
                        {
                            "name": "POKEMON_TYPE_FLYING",
                            "id": 3
                        },
                        {
                            "name": "POKEMON_TYPE_POISON",
                            "id": 4
                        },
                        {
                            "name": "POKEMON_TYPE_GROUND",
                            "id": 5
                        },
                        {
                            "name": "POKEMON_TYPE_ROCK",
                            "id": 6
                        },
                        {
                            "name": "POKEMON_TYPE_BUG",
                            "id": 7
                        },
                        {
                            "name": "POKEMON_TYPE_GHOST",
                            "id": 8
                        },
                        {
                            "name": "POKEMON_TYPE_STEEL",
                            "id": 9
                        },
                        {
                            "name": "POKEMON_TYPE_FIRE",
                            "id": 10
                        },
                        {
                            "name": "POKEMON_TYPE_WATER",
                            "id": 11
                        },
                        {
                            "name": "POKEMON_TYPE_GRASS",
                            "id": 12
                        },
                        {
                            "name": "POKEMON_TYPE_ELECTRIC",
                            "id": 13
                        },
                        {
                            "name": "POKEMON_TYPE_PSYCHIC",
                            "id": 14
                        },
                        {
                            "name": "POKEMON_TYPE_ICE",
                            "id": 15
                        },
                        {
                            "name": "POKEMON_TYPE_DRAGON",
                            "id": 16
                        },
                        {
                            "name": "POKEMON_TYPE_DARK",
                            "id": 17
                        },
                        {
                            "name": "POKEMON_TYPE_FAIRY",
                            "id": 18
                        }
                    ]
                }
            ]
        },
        {
            "name": "Map",
            "fields": [],
            "messages": [
                {
                    "name": "SpawnPoint",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "latitude",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "longitude",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "MapCell",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "s2CellId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "currentTimestampMs",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "Fort.FortData",
                            "name": "forts",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "SpawnPoint",
                            "name": "spawnPoints",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "deletedObjects",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "isTruncatedList",
                            "id": 7
                        },
                        {
                            "rule": "repeated",
                            "type": "Fort.FortSummary",
                            "name": "fortSummaries",
                            "id": 8
                        },
                        {
                            "rule": "repeated",
                            "type": "SpawnPoint",
                            "name": "decimatedSpawnPoints",
                            "id": 9
                        },
                        {
                            "rule": "repeated",
                            "type": "Pokemon.WildPokemon",
                            "name": "wildPokemons",
                            "id": 5
                        },
                        {
                            "rule": "repeated",
                            "type": "Pokemon.MapPokemon",
                            "name": "catchablePokemons",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "Pokemon.NearbyPokemon",
                            "name": "nearbyPokemons",
                            "id": 11
                        }
                    ]
                },
                {
                    "name": "Fort",
                    "fields": [],
                    "messages": [
                        {
                            "name": "FortLureInfo",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "fortId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "fixed64",
                                    "name": "encounterId",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonId",
                                    "name": "activePokemonId",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "lureExpiresTimestampMs",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "FortData",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "lastModifiedTimestampMs",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "latitude",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "longitude",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "enabled",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "FortType",
                                    "name": "type",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.TeamColor",
                                    "name": "ownedByTeam",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonId",
                                    "name": "guardPokemonId",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "guardPokemonCp",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "gymPoints",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "isInBattle",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "cooldownCompleteTimestampMs",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "FortSponsor",
                                    "name": "sponsor",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "FortRenderingType",
                                    "name": "renderingType",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "bytes",
                                    "name": "activeFortModifier",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "FortLureInfo",
                                    "name": "lureInfo",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "FortModifier",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Inventory.ItemId",
                                    "name": "itemId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "expirationTimestampMs",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "deployerPlayerCodename",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "FortSummary",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "fortSummaryId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "lastModifiedTimestampMs",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "latitude",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "longitude",
                                    "id": 4
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "FortType",
                            "values": [
                                {
                                    "name": "GYM",
                                    "id": 0
                                },
                                {
                                    "name": "CHECKPOINT",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "FortSponsor",
                            "values": [
                                {
                                    "name": "UNSET_SPONSOR",
                                    "id": 0
                                },
                                {
                                    "name": "MCDONALDS",
                                    "id": 1
                                },
                                {
                                    "name": "POKEMON_STORE",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "FortRenderingType",
                            "values": [
                                {
                                    "name": "DEFAULT",
                                    "id": 0
                                },
                                {
                                    "name": "INTERNAL_TEST",
                                    "id": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Pokemon",
                    "fields": [],
                    "messages": [
                        {
                            "name": "NearbyPokemon",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonId",
                                    "name": "pokemonId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "distanceInMeters",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "fixed64",
                                    "name": "encounterId",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "WildPokemon",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "fixed64",
                                    "name": "encounterId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "lastModifiedTimestampMs",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "latitude",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "longitude",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "spawnPointId",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "pokemonData",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "timeTillHiddenMs",
                                    "id": 11
                                }
                            ]
                        },
                        {
                            "name": "MapPokemon",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "spawnPointId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "fixed64",
                                    "name": "encounterId",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonId",
                                    "name": "pokemonId",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "expirationTimestampMs",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "latitude",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "longitude",
                                    "id": 6
                                }
                            ]
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "MapObjectsStatus",
                    "values": [
                        {
                            "name": "UNSET_STATUS",
                            "id": 0
                        },
                        {
                            "name": "SUCCESS",
                            "id": 1
                        },
                        {
                            "name": "LOCATION_UNSET",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "Inventory",
            "fields": [],
            "messages": [
                {
                    "name": "AppliedItem",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ItemId",
                            "name": "itemId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "ItemType",
                            "name": "itemType",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "expireMs",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "appliedMs",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "AppliedItems",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "AppliedItem",
                            "name": "item",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "EggIncubator",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "ItemId",
                            "name": "itemId",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "EggIncubatorType",
                            "name": "incubatorType",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "usesRemaining",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "pokemonId",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "startKmWalked",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "targetKmWalked",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "EggIncubators",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "EggIncubator",
                            "name": "eggIncubator",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "Item",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ItemId",
                            "name": "itemId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "count",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "unseen",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "PokemonFamily",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Enums.PokemonFamilyId",
                            "name": "familyId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "candy",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "InventoryUpgrade",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ItemId",
                            "name": "itemId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "InventoryUpgradeType",
                            "name": "upgradeType",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "additionalStorage",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "InventoryUpgrades",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "InventoryUpgrade",
                            "name": "inventoryUpgrades",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "InventoryItemData",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Data.PokemonData",
                            "name": "pokemonData",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "Item",
                            "name": "item",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "Data.PokedexEntry",
                            "name": "pokedexEntry",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "Data.Player.PlayerStats",
                            "name": "playerStats",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "Data.Player.PlayerCurrency",
                            "name": "playerCurrency",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "Data.Player.PlayerCamera",
                            "name": "playerCamera",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "InventoryUpgrades",
                            "name": "inventoryUpgrades",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "AppliedItems",
                            "name": "appliedItems",
                            "id": 8
                        },
                        {
                            "rule": "optional",
                            "type": "EggIncubators",
                            "name": "eggIncubators",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "PokemonFamily",
                            "name": "pokemonFamily",
                            "id": 10
                        }
                    ]
                },
                {
                    "name": "InventoryItem",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "modifiedTimestampMs",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "deletedItemKey",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "InventoryItemData",
                            "name": "inventoryItemData",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "InventoryDelta",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "originalTimestampMs",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "newTimestampMs",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "InventoryItem",
                            "name": "inventoryItems",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "ItemAward",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ItemId",
                            "name": "itemId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "itemCount",
                            "id": 2
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "ItemId",
                    "values": [
                        {
                            "name": "ITEM_UNKNOWN",
                            "id": 0
                        },
                        {
                            "name": "ITEM_POKE_BALL",
                            "id": 1
                        },
                        {
                            "name": "ITEM_GREAT_BALL",
                            "id": 2
                        },
                        {
                            "name": "ITEM_ULTRA_BALL",
                            "id": 3
                        },
                        {
                            "name": "ITEM_MASTER_BALL",
                            "id": 4
                        },
                        {
                            "name": "ITEM_POTION",
                            "id": 101
                        },
                        {
                            "name": "ITEM_SUPER_POTION",
                            "id": 102
                        },
                        {
                            "name": "ITEM_HYPER_POTION",
                            "id": 103
                        },
                        {
                            "name": "ITEM_MAX_POTION",
                            "id": 104
                        },
                        {
                            "name": "ITEM_REVIVE",
                            "id": 201
                        },
                        {
                            "name": "ITEM_MAX_REVIVE",
                            "id": 202
                        },
                        {
                            "name": "ITEM_LUCKY_EGG",
                            "id": 301
                        },
                        {
                            "name": "ITEM_INCENSE_ORDINARY",
                            "id": 401
                        },
                        {
                            "name": "ITEM_INCENSE_SPICY",
                            "id": 402
                        },
                        {
                            "name": "ITEM_INCENSE_COOL",
                            "id": 403
                        },
                        {
                            "name": "ITEM_INCENSE_FLORAL",
                            "id": 404
                        },
                        {
                            "name": "ITEM_TROY_DISK",
                            "id": 501
                        },
                        {
                            "name": "ITEM_X_ATTACK",
                            "id": 602
                        },
                        {
                            "name": "ITEM_X_DEFENSE",
                            "id": 603
                        },
                        {
                            "name": "ITEM_X_MIRACLE",
                            "id": 604
                        },
                        {
                            "name": "ITEM_RAZZ_BERRY",
                            "id": 701
                        },
                        {
                            "name": "ITEM_BLUK_BERRY",
                            "id": 702
                        },
                        {
                            "name": "ITEM_NANAB_BERRY",
                            "id": 703
                        },
                        {
                            "name": "ITEM_WEPAR_BERRY",
                            "id": 704
                        },
                        {
                            "name": "ITEM_PINAP_BERRY",
                            "id": 705
                        },
                        {
                            "name": "ITEM_SPECIAL_CAMERA",
                            "id": 801
                        },
                        {
                            "name": "ITEM_INCUBATOR_BASIC_UNLIMITED",
                            "id": 901
                        },
                        {
                            "name": "ITEM_INCUBATOR_BASIC",
                            "id": 902
                        },
                        {
                            "name": "ITEM_POKEMON_STORAGE_UPGRADE",
                            "id": 1001
                        },
                        {
                            "name": "ITEM_ITEM_STORAGE_UPGRADE",
                            "id": 1002
                        }
                    ]
                },
                {
                    "name": "ItemType",
                    "values": [
                        {
                            "name": "ITEM_TYPE_NONE",
                            "id": 0
                        },
                        {
                            "name": "ITEM_TYPE_POKEBALL",
                            "id": 1
                        },
                        {
                            "name": "ITEM_TYPE_POTION",
                            "id": 2
                        },
                        {
                            "name": "ITEM_TYPE_REVIVE",
                            "id": 3
                        },
                        {
                            "name": "ITEM_TYPE_MAP",
                            "id": 4
                        },
                        {
                            "name": "ITEM_TYPE_BATTLE",
                            "id": 5
                        },
                        {
                            "name": "ITEM_TYPE_FOOD",
                            "id": 6
                        },
                        {
                            "name": "ITEM_TYPE_CAMERA",
                            "id": 7
                        },
                        {
                            "name": "ITEM_TYPE_DISK",
                            "id": 8
                        },
                        {
                            "name": "ITEM_TYPE_INCUBATOR",
                            "id": 9
                        },
                        {
                            "name": "ITEM_TYPE_INCENSE",
                            "id": 10
                        },
                        {
                            "name": "ITEM_TYPE_XP_BOOST",
                            "id": 11
                        },
                        {
                            "name": "ITEM_TYPE_INVENTORY_UPGRADE",
                            "id": 12
                        }
                    ]
                },
                {
                    "name": "EggIncubatorType",
                    "values": [
                        {
                            "name": "INCUBATOR_UNSET",
                            "id": 0
                        },
                        {
                            "name": "INCUBATOR_DISTANCE",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "InventoryUpgradeType",
                    "values": [
                        {
                            "name": "UPGRADE_UNSET",
                            "id": 0
                        },
                        {
                            "name": "INCREASE_ITEM_STORAGE",
                            "id": 1
                        },
                        {
                            "name": "INCREASE_POKEMON_STORAGE",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "Networking",
            "fields": [],
            "messages": [
                {
                    "name": "Envelopes",
                    "fields": [],
                    "messages": [
                        {
                            "name": "AuthTicket",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bytes",
                                    "name": "start",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "expireTimestampMs",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "bytes",
                                    "name": "end",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "Unknown6",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "unknown1",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Unknown2",
                                    "name": "unknown2",
                                    "id": 2
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Unknown2",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "bytes",
                                            "name": "unknown1",
                                            "id": 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "RequestEnvelope",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "statusCode",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "requestId",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Requests.Request",
                                    "name": "requests",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "Unknown6",
                                    "name": "unknown6",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "latitude",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "longitude",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "altitude",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "AuthInfo",
                                    "name": "authInfo",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "AuthTicket",
                                    "name": "authTicket",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "unknown12",
                                    "id": 12
                                }
                            ],
                            "messages": [
                                {
                                    "name": "AuthInfo",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "provider",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "JWT",
                                            "name": "token",
                                            "id": 2
                                        }
                                    ],
                                    "messages": [
                                        {
                                            "name": "JWT",
                                            "fields": [
                                                {
                                                    "rule": "optional",
                                                    "type": "string",
                                                    "name": "contents",
                                                    "id": 1
                                                },
                                                {
                                                    "rule": "optional",
                                                    "type": "int32",
                                                    "name": "unknown2",
                                                    "id": 2
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Unknown6Response",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "unknown1",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Unknown2",
                                    "name": "unknown2",
                                    "id": 2
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Unknown2",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "unknown1",
                                            "id": 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ResponseEnvelope",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "statusCode",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "requestId",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "apiUrl",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Unknown6Response",
                                    "name": "unknown6",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "AuthTicket",
                                    "name": "authTicket",
                                    "id": 7
                                },
                                {
                                    "rule": "repeated",
                                    "type": "bytes",
                                    "name": "returns",
                                    "id": 100
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "error",
                                    "id": 101
                                }
                            ],
                            "messages": [
                                {
                                    "name": "Unknown7",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "bytes",
                                            "name": "unknown71",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int64",
                                            "name": "unknown72",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bytes",
                                            "name": "unknown73",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Requests",
                    "fields": [],
                    "messages": [
                        {
                            "name": "Request",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "RequestType",
                                    "name": "requestType",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "bytes",
                                    "name": "requestMessage",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "Messages",
                            "fields": [],
                            "messages": [
                                {
                                    "name": "AddFortModifierMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.ItemId",
                                            "name": "modifierType",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fortId",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "AttackGymMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gymId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "battleId",
                                            "id": 2
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "Data.Battle.BattleAction",
                                            "name": "attackActions",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Data.Battle.BattleAction",
                                            "name": "lastRetrievedActions",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 6
                                        }
                                    ]
                                },
                                {
                                    "name": "CatchPokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "fixed64",
                                            "name": "encounterId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "pokeball",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "normalizedReticleSize",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "spawnPointGuid",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "hitPokemon",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "spinModifier",
                                            "id": 6
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "normalizedHitPosition",
                                            "id": 7
                                        }
                                    ]
                                },
                                {
                                    "name": "CheckAwardedBadgesMessage",
                                    "fields": []
                                },
                                {
                                    "name": "CheckCodenameAvailableMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "codename",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "ClaimCodenameMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "codename",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "CollectDailyBonusMessage",
                                    "fields": []
                                },
                                {
                                    "name": "CollectDailyDefenderBonusMessage",
                                    "fields": []
                                },
                                {
                                    "name": "DiskEncounterMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "encounterId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fortId",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "DownloadItemTemplatesMessage",
                                    "fields": []
                                },
                                {
                                    "name": "DownloadRemoteConfigVersionMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Enums.Platform",
                                            "name": "platform",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "deviceManufacturer",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "deviceModel",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "locale",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint32",
                                            "name": "appVersion",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "DownloadSettingsMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "hash",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "EchoMessage",
                                    "fields": []
                                },
                                {
                                    "name": "EncounterMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "fixed64",
                                            "name": "encounterId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "spawnPointId",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "EncounterTutorialCompleteMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Enums.PokemonId",
                                            "name": "pokemonId",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "EquipBadgeMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Enums.BadgeType",
                                            "name": "badgeType",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "EvolvePokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "fixed64",
                                            "name": "pokemonId",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "FortDeployPokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fortId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "pokemonId",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "FortDetailsMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fortId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "latitude",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "longitude",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "FortRecallPokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fortId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "pokemonId",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "FortSearchMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "fortId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "fortLatitude",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "fortLongitude",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "GetAssetDigestMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Enums.Platform",
                                            "name": "platform",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "deviceManufacturer",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "deviceModel",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "locale",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint32",
                                            "name": "appVersion",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "GetDownloadUrlsMessage",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "string",
                                            "name": "assetId",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "GetGymDetailsMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gymId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "gymLatitude",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "gymLongitude",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "GetHatchedEggsMessage",
                                    "fields": []
                                },
                                {
                                    "name": "GetIncensePokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "GetInventoryMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int64",
                                            "name": "lastTimestampMs",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "itemBeenSeen",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "GetMapObjectsMessage",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "uint64",
                                            "name": "cellId",
                                            "id": 1,
                                            "options": {
                                                "packed": true
                                            }
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "int64",
                                            "name": "sinceTimestampMs",
                                            "id": 2,
                                            "options": {
                                                "packed": true
                                            }
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "latitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "longitude",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "GetPlayerMessage",
                                    "fields": []
                                },
                                {
                                    "name": "GetPlayerProfileMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "playerName",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "GetSuggestedCodenamesMessage",
                                    "fields": []
                                },
                                {
                                    "name": "IncenseEncounterMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int64",
                                            "name": "encounterId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "encounterLocation",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "LevelUpRewardsMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "level",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "MarkTutorialCompleteMessage",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "Enums.TutorialState",
                                            "name": "tutorialsCompleted",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "sendMarketingEmails",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "sendPushNotifications",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "NicknamePokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "pokemonId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "nickname",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "PlayerUpdateMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "latitude",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "longitude",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "RecycleInventoryItemMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.ItemId",
                                            "name": "itemId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "count",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "ReleasePokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "fixed64",
                                            "name": "pokemonId",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "SetAvatarMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Data.Player.PlayerAvatar",
                                            "name": "playerAvatar",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "SetContactSettingsMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Data.Player.ContactSettings",
                                            "name": "contactSettings",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "SetFavoritePokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "pokemonId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "bool",
                                            "name": "isFavorite",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "SetPlayerTeamMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Enums.TeamColor",
                                            "name": "team",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "StartGymBattleMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gymId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "fixed64",
                                            "name": "attackingPokemonIds",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "defendingPokemonId",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "UpgradePokemonMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "pokemonId",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "UseIncenseMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.ItemId",
                                            "name": "incenseType",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "UseItemCaptureMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.ItemId",
                                            "name": "itemId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "fixed64",
                                            "name": "encounterId",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "spawnPointGuid",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "UseItemEggIncubatorMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "itemId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "pokemonId",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "UseItemGymMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.ItemId",
                                            "name": "itemId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "gymId",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLatitude",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "double",
                                            "name": "playerLongitude",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "UseItemPotionMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.ItemId",
                                            "name": "itemId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "pokemonId",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "UseItemReviveMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.ItemId",
                                            "name": "itemId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "uint64",
                                            "name": "pokemonId",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "UseItemXpBoostMessage",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.ItemId",
                                            "name": "itemId",
                                            "id": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "enums": [
                        {
                            "name": "RequestType",
                            "values": [
                                {
                                    "name": "METHOD_UNSET",
                                    "id": 0
                                },
                                {
                                    "name": "PLAYER_UPDATE",
                                    "id": 1
                                },
                                {
                                    "name": "GET_PLAYER",
                                    "id": 2
                                },
                                {
                                    "name": "GET_INVENTORY",
                                    "id": 4
                                },
                                {
                                    "name": "DOWNLOAD_SETTINGS",
                                    "id": 5
                                },
                                {
                                    "name": "DOWNLOAD_ITEM_TEMPLATES",
                                    "id": 6
                                },
                                {
                                    "name": "DOWNLOAD_REMOTE_CONFIG_VERSION",
                                    "id": 7
                                },
                                {
                                    "name": "FORT_SEARCH",
                                    "id": 101
                                },
                                {
                                    "name": "ENCOUNTER",
                                    "id": 102
                                },
                                {
                                    "name": "CATCH_POKEMON",
                                    "id": 103
                                },
                                {
                                    "name": "FORT_DETAILS",
                                    "id": 104
                                },
                                {
                                    "name": "ITEM_USE",
                                    "id": 105
                                },
                                {
                                    "name": "GET_MAP_OBJECTS",
                                    "id": 106
                                },
                                {
                                    "name": "FORT_DEPLOY_POKEMON",
                                    "id": 110
                                },
                                {
                                    "name": "FORT_RECALL_POKEMON",
                                    "id": 111
                                },
                                {
                                    "name": "RELEASE_POKEMON",
                                    "id": 112
                                },
                                {
                                    "name": "USE_ITEM_POTION",
                                    "id": 113
                                },
                                {
                                    "name": "USE_ITEM_CAPTURE",
                                    "id": 114
                                },
                                {
                                    "name": "USE_ITEM_FLEE",
                                    "id": 115
                                },
                                {
                                    "name": "USE_ITEM_REVIVE",
                                    "id": 116
                                },
                                {
                                    "name": "TRADE_SEARCH",
                                    "id": 117
                                },
                                {
                                    "name": "TRADE_OFFER",
                                    "id": 118
                                },
                                {
                                    "name": "TRADE_RESPONSE",
                                    "id": 119
                                },
                                {
                                    "name": "TRADE_RESULT",
                                    "id": 120
                                },
                                {
                                    "name": "GET_PLAYER_PROFILE",
                                    "id": 121
                                },
                                {
                                    "name": "GET_ITEM_PACK",
                                    "id": 122
                                },
                                {
                                    "name": "BUY_ITEM_PACK",
                                    "id": 123
                                },
                                {
                                    "name": "BUY_GEM_PACK",
                                    "id": 124
                                },
                                {
                                    "name": "EVOLVE_POKEMON",
                                    "id": 125
                                },
                                {
                                    "name": "GET_HATCHED_EGGS",
                                    "id": 126
                                },
                                {
                                    "name": "ENCOUNTER_TUTORIAL_COMPLETE",
                                    "id": 127
                                },
                                {
                                    "name": "LEVEL_UP_REWARDS",
                                    "id": 128
                                },
                                {
                                    "name": "CHECK_AWARDED_BADGES",
                                    "id": 129
                                },
                                {
                                    "name": "USE_ITEM_GYM",
                                    "id": 133
                                },
                                {
                                    "name": "GET_GYM_DETAILS",
                                    "id": 134
                                },
                                {
                                    "name": "START_GYM_BATTLE",
                                    "id": 135
                                },
                                {
                                    "name": "ATTACK_GYM",
                                    "id": 136
                                },
                                {
                                    "name": "RECYCLE_INVENTORY_ITEM",
                                    "id": 137
                                },
                                {
                                    "name": "COLLECT_DAILY_BONUS",
                                    "id": 138
                                },
                                {
                                    "name": "USE_ITEM_XP_BOOST",
                                    "id": 139
                                },
                                {
                                    "name": "USE_ITEM_EGG_INCUBATOR",
                                    "id": 140
                                },
                                {
                                    "name": "USE_INCENSE",
                                    "id": 141
                                },
                                {
                                    "name": "GET_INCENSE_POKEMON",
                                    "id": 142
                                },
                                {
                                    "name": "INCENSE_ENCOUNTER",
                                    "id": 143
                                },
                                {
                                    "name": "ADD_FORT_MODIFIER",
                                    "id": 144
                                },
                                {
                                    "name": "DISK_ENCOUNTER",
                                    "id": 145
                                },
                                {
                                    "name": "COLLECT_DAILY_DEFENDER_BONUS",
                                    "id": 146
                                },
                                {
                                    "name": "UPGRADE_POKEMON",
                                    "id": 147
                                },
                                {
                                    "name": "SET_FAVORITE_POKEMON",
                                    "id": 148
                                },
                                {
                                    "name": "NICKNAME_POKEMON",
                                    "id": 149
                                },
                                {
                                    "name": "EQUIP_BADGE",
                                    "id": 150
                                },
                                {
                                    "name": "SET_CONTACT_SETTINGS",
                                    "id": 151
                                },
                                {
                                    "name": "GET_ASSET_DIGEST",
                                    "id": 300
                                },
                                {
                                    "name": "GET_DOWNLOAD_URLS",
                                    "id": 301
                                },
                                {
                                    "name": "GET_SUGGESTED_CODENAMES",
                                    "id": 401
                                },
                                {
                                    "name": "CHECK_CODENAME_AVAILABLE",
                                    "id": 402
                                },
                                {
                                    "name": "CLAIM_CODENAME",
                                    "id": 403
                                },
                                {
                                    "name": "SET_AVATAR",
                                    "id": 404
                                },
                                {
                                    "name": "SET_PLAYER_TEAM",
                                    "id": 405
                                },
                                {
                                    "name": "MARK_TUTORIAL_COMPLETE",
                                    "id": 406
                                },
                                {
                                    "name": "LOAD_SPAWN_POINTS",
                                    "id": 500
                                },
                                {
                                    "name": "ECHO",
                                    "id": 666
                                },
                                {
                                    "name": "DEBUG_UPDATE_INVENTORY",
                                    "id": 700
                                },
                                {
                                    "name": "DEBUG_DELETE_PLAYER",
                                    "id": 701
                                },
                                {
                                    "name": "SFIDA_REGISTRATION",
                                    "id": 800
                                },
                                {
                                    "name": "SFIDA_ACTION_LOG",
                                    "id": 801
                                },
                                {
                                    "name": "SFIDA_CERTIFICATION",
                                    "id": 802
                                },
                                {
                                    "name": "SFIDA_UPDATE",
                                    "id": 803
                                },
                                {
                                    "name": "SFIDA_ACTION",
                                    "id": 804
                                },
                                {
                                    "name": "SFIDA_DOWSER",
                                    "id": 805
                                },
                                {
                                    "name": "SFIDA_CAPTURE",
                                    "id": 806
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Responses",
                    "fields": [],
                    "messages": [
                        {
                            "name": "AddFortModifierResponse",
                            "fields": []
                        },
                        {
                            "name": "AttackGymResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Battle.BattleLog",
                                    "name": "battleLog",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "battleId",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Battle.BattlePokemonInfo",
                                    "name": "activeDefender",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Battle.BattlePokemonInfo",
                                    "name": "activeAttacker",
                                    "id": 5
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_INVALID_ATTACK_ACTIONS",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_NOT_IN_RANGE",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CatchPokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "CatchStatus",
                                    "name": "status",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "missPercent",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "capturedPokemonId",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Capture.CaptureAward",
                                    "name": "captureAward",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "CatchStatus",
                                    "values": [
                                        {
                                            "name": "CATCH_ERROR",
                                            "id": 0
                                        },
                                        {
                                            "name": "CATCH_SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "CATCH_ESCAPE",
                                            "id": 2
                                        },
                                        {
                                            "name": "CATCH_FLEE",
                                            "id": 3
                                        },
                                        {
                                            "name": "CATCH_MISSED",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CheckAwardedBadgesResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "success",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Enums.BadgeType",
                                    "name": "awardedBadges",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "awardedBadgeLevels",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "CheckCodenameAvailableResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "codename",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "userMessage",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "isAssignable",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Status",
                                    "name": "status",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Status",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "CODENAME_NOT_AVAILABLE",
                                            "id": 2
                                        },
                                        {
                                            "name": "CODENAME_NOT_VALID",
                                            "id": 3
                                        },
                                        {
                                            "name": "CURRENT_OWNER",
                                            "id": 4
                                        },
                                        {
                                            "name": "CODENAME_CHANGE_NOT_ALLOWED",
                                            "id": 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ClaimCodenameResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "codename",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "userMessage",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "isAssignable",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Status",
                                    "name": "status",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Status",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "CODENAME_NOT_AVAILABLE",
                                            "id": 2
                                        },
                                        {
                                            "name": "CODENAME_NOT_VALID",
                                            "id": 3
                                        },
                                        {
                                            "name": "CURRENT_OWNER",
                                            "id": 4
                                        },
                                        {
                                            "name": "CODENAME_CHANGE_NOT_ALLOWED",
                                            "id": 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CollectDailyBonusResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "FAILURE",
                                            "id": 2
                                        },
                                        {
                                            "name": "TOO_SOON",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CollectDailyDefenderBonusResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "currencyType",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "currencyAwarded",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "defendersCount",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "FAILURE",
                                            "id": 2
                                        },
                                        {
                                            "name": "TOO_SOON",
                                            "id": 3
                                        },
                                        {
                                            "name": "NO_DEFENDERS",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "DiskEncounterResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "pokemonData",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Capture.CaptureProbability",
                                    "name": "captureProbability",
                                    "id": 3
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNKNOWN",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "NOT_AVAILABLE",
                                            "id": 2
                                        },
                                        {
                                            "name": "NOT_IN_RANGE",
                                            "id": 3
                                        },
                                        {
                                            "name": "ENCOUNTER_ALREADY_FINISHED",
                                            "id": 4
                                        },
                                        {
                                            "name": "POKEMON_INVENTORY_FULL",
                                            "id": 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "DownloadItemTemplatesResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "success",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "ItemTemplate",
                                    "name": "itemTemplates",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "timestampMs",
                                    "id": 3
                                }
                            ],
                            "messages": [
                                {
                                    "name": "ItemTemplate",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "string",
                                            "name": "templateId",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.PokemonSettings",
                                            "name": "pokemonSettings",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.ItemSettings",
                                            "name": "itemSettings",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.MoveSettings",
                                            "name": "moveSettings",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.MoveSequenceSettings",
                                            "name": "moveSequenceSettings",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.TypeEffectiveSettings",
                                            "name": "typeEffective",
                                            "id": 8
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.BadgeSettings",
                                            "name": "badgeSettings",
                                            "id": 10
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.CameraSettings",
                                            "name": "camera",
                                            "id": 11
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.PlayerLevelSettings",
                                            "name": "playerLevel",
                                            "id": 12
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.GymLevelSettings",
                                            "name": "gymLevel",
                                            "id": 13
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.GymBattleSettings",
                                            "name": "battleSettings",
                                            "id": 14
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.EncounterSettings",
                                            "name": "encounterSettings",
                                            "id": 15
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.IapItemDisplay",
                                            "name": "iapItemDisplay",
                                            "id": 16
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.IapSettings",
                                            "name": "iapSettings",
                                            "id": 17
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.PokemonUpgradeSettings",
                                            "name": "pokemonUpgrades",
                                            "id": 18
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Settings.Master.EquippedBadgeSettings",
                                            "name": "equippedBadges",
                                            "id": 19
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "DownloadRemoteConfigVersionResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "itemTemplatesTimestampMs",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "assetDigestTimestampMs",
                                    "id": 3
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "DownloadSettingsResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "error",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "hash",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Settings.GlobalSettings",
                                    "name": "settings",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "EchoResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "context",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "EncounterResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Map.Pokemon.WildPokemon",
                                    "name": "wildPokemon",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Background",
                                    "name": "background",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Status",
                                    "name": "status",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Capture.CaptureProbability",
                                    "name": "captureProbability",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Background",
                                    "values": [
                                        {
                                            "name": "PARK",
                                            "id": 0
                                        },
                                        {
                                            "name": "DESERT",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "Status",
                                    "values": [
                                        {
                                            "name": "ENCOUNTER_ERROR",
                                            "id": 0
                                        },
                                        {
                                            "name": "ENCOUNTER_SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ENCOUNTER_NOT_FOUND",
                                            "id": 2
                                        },
                                        {
                                            "name": "ENCOUNTER_CLOSED",
                                            "id": 3
                                        },
                                        {
                                            "name": "ENCOUNTER_POKEMON_FLED",
                                            "id": 4
                                        },
                                        {
                                            "name": "ENCOUNTER_NOT_IN_RANGE",
                                            "id": 5
                                        },
                                        {
                                            "name": "ENCOUNTER_ALREADY_HAPPENED",
                                            "id": 6
                                        },
                                        {
                                            "name": "POKEMON_INVENTORY_FULL",
                                            "id": 7
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "EncounterTutorialCompleteResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "pokemonData",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Capture.CaptureAward",
                                    "name": "captureAward",
                                    "id": 3
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_INVALID_POKEMON",
                                            "id": 2
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "EquipBadgeResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Player.EquippedBadge",
                                    "name": "equipped",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "COOLDOWN_ACTIVE",
                                            "id": 2
                                        },
                                        {
                                            "name": "NOT_QUALIFIED",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "EvolvePokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "evolvedPokemonData",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "experienceAwarded",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "candyAwarded",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "FAILED_POKEMON_MISSING",
                                            "id": 2
                                        },
                                        {
                                            "name": "FAILED_INSUFFICIENT_RESOURCES",
                                            "id": 3
                                        },
                                        {
                                            "name": "FAILED_POKEMON_CANNOT_EVOLVE",
                                            "id": 4
                                        },
                                        {
                                            "name": "FAILED_POKEMON_IS_DEPLOYED",
                                            "id": 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "FortDetailsResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "fortId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.TeamColor",
                                    "name": "teamColor",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "pokemonData",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 4
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "imageUrls",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "fp",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "stamina",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "maxStamina",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "Map.Fort.FortType",
                                    "name": "type",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "latitude",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "longitude",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "description",
                                    "id": 12
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Map.Fort.FortModifier",
                                    "name": "modifiers",
                                    "id": 13
                                }
                            ]
                        },
                        {
                            "name": "FortDeployPokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "FortDetailsResponse",
                                    "name": "fortDetails",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "pokemonData",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Gym.GymState",
                                    "name": "gymState",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "NO_RESULT_SET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_ALREADY_HAS_POKEMON_ON_FORT",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_OPPOSING_TEAM_OWNS_FORT",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_FORT_IS_FULL",
                                            "id": 4
                                        },
                                        {
                                            "name": "ERROR_NOT_IN_RANGE",
                                            "id": 5
                                        },
                                        {
                                            "name": "ERROR_PLAYER_HAS_NO_TEAM",
                                            "id": 6
                                        },
                                        {
                                            "name": "ERROR_POKEMON_NOT_FULL_HP",
                                            "id": 7
                                        },
                                        {
                                            "name": "ERROR_PLAYER_BELOW_MINIMUM_LEVEL",
                                            "id": 8
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "FortRecallPokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "FortDetailsResponse",
                                    "name": "fortDetails",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "NO_RESULT_SET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_NOT_IN_RANGE",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_POKEMON_NOT_ON_FORT",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_NO_PLAYER",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "FortSearchResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Inventory.ItemAward",
                                    "name": "itemsAwarded",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "gemsAwarded",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "pokemonDataEgg",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "experienceAwarded",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "cooldownCompleteTimestampMs",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "chainHackSequenceNumber",
                                    "id": 7
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "NO_RESULT_SET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "OUT_OF_RANGE",
                                            "id": 2
                                        },
                                        {
                                            "name": "IN_COOLDOWN_PERIOD",
                                            "id": 3
                                        },
                                        {
                                            "name": "INVENTORY_FULL",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetAssetDigestResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Data.AssetDigestEntry",
                                    "name": "digest",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "timestampMs",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "GetDownloadUrlsResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Data.DownloadUrlEntry",
                                    "name": "downloadUrls",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "GetGymDetailsResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Data.Gym.GymState",
                                    "name": "gymState",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "name",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "urls",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "description",
                                    "id": 5
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_NOT_IN_RANGE",
                                            "id": 2
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetHatchedEggsResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "success",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "uint64",
                                    "name": "pokemonId",
                                    "id": 2,
                                    "options": {
                                        "packed": true
                                    }
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "experienceAwarded",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "candyAwarded",
                                    "id": 4
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "stardustAwarded",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "GetIncensePokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "pokemonTypeId",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "latitude",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "longitude",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "encounterLocation",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "encounterId",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "disappearTimestampMs",
                                    "id": 7
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "INCENSE_ENCOUNTER_UNKNOWN",
                                            "id": 0
                                        },
                                        {
                                            "name": "INCENSE_ENCOUNTER_AVAILABLE",
                                            "id": 1
                                        },
                                        {
                                            "name": "INCENSE_ENCOUNTER_NOT_AVAILABLE",
                                            "id": 2
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetInventoryResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "success",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Inventory.InventoryDelta",
                                    "name": "inventoryDelta",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "GetMapObjectsResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Map.MapCell",
                                    "name": "mapCells",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Map.MapObjectsStatus",
                                    "name": "status",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "GetPlayerProfileResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "startTime",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Data.PlayerBadge",
                                    "name": "badges",
                                    "id": 3
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GetPlayerResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "success",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PlayerData",
                                    "name": "playerData",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "GetSuggestedCodenamesResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "codenames",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "success",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "IncenseEncounterResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "pokemonData",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Capture.CaptureProbability",
                                    "name": "captureProbability",
                                    "id": 3
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "INCENSE_ENCOUNTER_UNKNOWN",
                                            "id": 0
                                        },
                                        {
                                            "name": "INCENSE_ENCOUNTER_SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "INCENSE_ENCOUNTER_NOT_AVAILABLE",
                                            "id": 2
                                        },
                                        {
                                            "name": "POKEMON_INVENTORY_FULL",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "LevelUpRewardsResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Inventory.ItemAward",
                                    "name": "itemsAwarded",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Inventory.ItemId",
                                    "name": "itemsUnlocked",
                                    "id": 4
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "AWARDED_ALREADY",
                                            "id": 2
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MarkTutorialCompleteResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "success",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PlayerData",
                                    "name": "playerData",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "NicknamePokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_INVALID_NICKNAME",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_POKEMON_NOT_FOUND",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_POKEMON_IS_EGG",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "PlayerUpdateResponse",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "Map.Pokemon.WildPokemon",
                                    "name": "wildPokemons",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Map.Fort.FortData",
                                    "name": "forts",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "fortsNearby",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "RecycleInventoryItemResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "newCount",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_NOT_ENOUGH_COPIES",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_CANNOT_RECYCLE_INCUBATORS",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "ReleasePokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "candyAwarded",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "POKEMON_DEPLOYED",
                                            "id": 2
                                        },
                                        {
                                            "name": "FAILED",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_POKEMON_IS_EGG",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SetAvatarResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Status",
                                    "name": "status",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PlayerData",
                                    "name": "playerData",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Status",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "AVATAR_ALREADY_SET",
                                            "id": 2
                                        },
                                        {
                                            "name": "FAILURE",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SetContactSettingsResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Status",
                                    "name": "status",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PlayerData",
                                    "name": "playerData",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Status",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "FAILURE",
                                            "id": 2
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SetFavoritePokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_POKEMON_NOT_FOUND",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_POKEMON_IS_EGG",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SetPlayerTeamResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Status",
                                    "name": "status",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PlayerData",
                                    "name": "playerData",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Status",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "TEAM_ALREADY_SET",
                                            "id": 2
                                        },
                                        {
                                            "name": "FAILURE",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "StartGymBattleResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "battleStartTimestampMs",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "battleEndTimestampMs",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "battleId",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Battle.BattleParticipant",
                                    "name": "defender",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.Battle.BattleLog",
                                    "name": "battleLog",
                                    "id": 6
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_GYM_NOT_FOUND",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_GYM_NEUTRAL",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_GYM_WRONG_TEAM",
                                            "id": 4
                                        },
                                        {
                                            "name": "ERROR_GYM_EMPTY",
                                            "id": 5
                                        },
                                        {
                                            "name": "ERROR_INVALID_DEFENDER",
                                            "id": 6
                                        },
                                        {
                                            "name": "ERROR_TRAINING_INVALID_ATTACKER_COUNT",
                                            "id": 7
                                        },
                                        {
                                            "name": "ERROR_ALL_POKEMON_FAINTED",
                                            "id": 8
                                        },
                                        {
                                            "name": "ERROR_TOO_MANY_BATTLES",
                                            "id": 9
                                        },
                                        {
                                            "name": "ERROR_TOO_MANY_PLAYERS",
                                            "id": 10
                                        },
                                        {
                                            "name": "ERROR_GYM_BATTLE_LOCKOUT",
                                            "id": 11
                                        },
                                        {
                                            "name": "ERROR_PLAYER_BELOW_MINIMUM_LEVEL",
                                            "id": 12
                                        },
                                        {
                                            "name": "ERROR_NOT_IN_RANGE",
                                            "id": 13
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "UpgradePokemonResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Data.PokemonData",
                                    "name": "upgradedPokemon",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_POKEMON_NOT_FOUND",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_INSUFFICIENT_RESOURCES",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_UPGRADE_NOT_AVAILABLE",
                                            "id": 4
                                        },
                                        {
                                            "name": "ERROR_POKEMON_IS_DEPLOYED",
                                            "id": 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "UseIncenseResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Inventory.AppliedItem",
                                    "name": "appliedIncense",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNKNOWN",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "INCENSE_ALREADY_ACTIVE",
                                            "id": 2
                                        },
                                        {
                                            "name": "NONE_IN_INVENTORY",
                                            "id": 3
                                        },
                                        {
                                            "name": "LOCATION_UNSET",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "UseItemCaptureResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "success",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "itemCaptureMult",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "double",
                                    "name": "itemFleeMult",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "stopMovement",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "stopAttack",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "targetMax",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "targetSlow",
                                    "id": 7
                                }
                            ]
                        },
                        {
                            "name": "UseItemEggIncubatorResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Inventory.EggIncubator",
                                    "name": "eggIncubator",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_INCUBATOR_NOT_FOUND",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_POKEMON_EGG_NOT_FOUND",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_POKEMON_ID_NOT_EGG",
                                            "id": 4
                                        },
                                        {
                                            "name": "ERROR_INCUBATOR_ALREADY_IN_USE",
                                            "id": 5
                                        },
                                        {
                                            "name": "ERROR_POKEMON_ALREADY_INCUBATING",
                                            "id": 6
                                        },
                                        {
                                            "name": "ERROR_INCUBATOR_NO_USES_REMAINING",
                                            "id": 7
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "UseItemGymResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "updatedGp",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_CANNOT_USE",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_NOT_IN_RANGE",
                                            "id": 3
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "UseItemPotionResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "stamina",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_NO_POKEMON",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_CANNOT_USE",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_DEPLOYED_TO_FORT",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "UseItemReviveResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "stamina",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_NO_POKEMON",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_CANNOT_USE",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_DEPLOYED_TO_FORT",
                                            "id": 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "UseItemXpBoostResponse",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Result",
                                    "name": "result",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Inventory.AppliedItems",
                                    "name": "appliedItems",
                                    "id": 2
                                }
                            ],
                            "enums": [
                                {
                                    "name": "Result",
                                    "values": [
                                        {
                                            "name": "UNSET",
                                            "id": 0
                                        },
                                        {
                                            "name": "SUCCESS",
                                            "id": 1
                                        },
                                        {
                                            "name": "ERROR_INVALID_ITEM_TYPE",
                                            "id": 2
                                        },
                                        {
                                            "name": "ERROR_XP_BOOST_ALREADY_ACTIVE",
                                            "id": 3
                                        },
                                        {
                                            "name": "ERROR_NO_ITEMS_REMAINING",
                                            "id": 4
                                        },
                                        {
                                            "name": "ERROR_LOCATION_UNSET",
                                            "id": 5
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Settings",
            "fields": [],
            "messages": [
                {
                    "name": "FortSettings",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "interactionRangeMeters",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "maxTotalDeployedPokemon",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "maxPlayerDeployedPokemon",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "deployStaminaMultiplier",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "deployAttackMultiplier",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "farInteractionRangeMeters",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "MapSettings",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "pokemonVisibleRange",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "pokeNavRangeMeters",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "encounterRangeMeters",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "float",
                            "name": "getMapObjectsMinRefreshSeconds",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "float",
                            "name": "getMapObjectsMaxRefreshSeconds",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "float",
                            "name": "getMapObjectsMinDistanceMeters",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "googleMapsApiKey",
                            "id": 7
                        }
                    ]
                },
                {
                    "name": "LevelSettings",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "trainerCpModifier",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "trainerDifficultyModifier",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "InventorySettings",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "maxPokemon",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "maxBagItems",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "basePokemon",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "baseBagItems",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "baseEggs",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "GlobalSettings",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "FortSettings",
                            "name": "fortSettings",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "MapSettings",
                            "name": "mapSettings",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "LevelSettings",
                            "name": "levelSettings",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "InventorySettings",
                            "name": "inventorySettings",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "minimumClientVersion",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "DownloadSettingsAction",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "hash",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "Master",
                    "fields": [],
                    "messages": [
                        {
                            "name": "ItemSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Inventory.ItemId",
                                    "name": "itemId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Inventory.ItemType",
                                    "name": "itemType",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.ItemCategory",
                                    "name": "category",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "dropFreq",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "dropTrainerLevel",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.PokeballAttributes",
                                    "name": "pokeball",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.PotionAttributes",
                                    "name": "potion",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.ReviveAttributes",
                                    "name": "revive",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.BattleAttributes",
                                    "name": "battle",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.FoodAttributes",
                                    "name": "food",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.InventoryUpgradeAttributes",
                                    "name": "inventoryUpgrade",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.ExperienceBoostAttributes",
                                    "name": "xpBoost",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.IncenseAttributes",
                                    "name": "incense",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.EggIncubatorAttributes",
                                    "name": "eggIncubator",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "Item.FortModifierAttributes",
                                    "name": "fortModifier",
                                    "id": 15
                                }
                            ]
                        },
                        {
                            "name": "MoveSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonMovementType",
                                    "name": "movementId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "animationId",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonType",
                                    "name": "pokemonType",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "power",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "accuracyChance",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "criticalChance",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "healScalar",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "staminaLossScalar",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "trainerLevelMin",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "trainerLevelMax",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "vfxName",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "durationMs",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "damageWindowStartMs",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "damageWindowEndMs",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "energyDelta",
                                    "id": 15
                                }
                            ]
                        },
                        {
                            "name": "BadgeSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Enums.BadgeType",
                                    "name": "badgeType",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "badgeRank",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "targets",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "PokemonSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonId",
                                    "name": "pokemonId",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "modelScale",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonType",
                                    "name": "type",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonType",
                                    "name": "type_2",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "Pokemon.CameraAttributes",
                                    "name": "camera",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "Pokemon.EncounterAttributes",
                                    "name": "encounter",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "Pokemon.StatsAttributes",
                                    "name": "stats",
                                    "id": 8
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Enums.PokemonMove",
                                    "name": "quickMoves",
                                    "id": 9
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Enums.PokemonMove",
                                    "name": "cinematicMoves",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "animationTime",
                                    "id": 11
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Enums.PokemonId",
                                    "name": "evolutionIds",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "evolutionPips",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonClass",
                                    "name": "class",
                                    "id": 14
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "pokedexHeightM",
                                    "id": 15
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "pokedexWeightKg",
                                    "id": 16
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonId",
                                    "name": "parentPokemonId",
                                    "id": 17
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "heightStdDev",
                                    "id": 18
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "weightStdDev",
                                    "id": 19
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "kmDistanceToHatch",
                                    "id": 20
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonFamilyId",
                                    "name": "familyId",
                                    "id": 21
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "candyToEvolve",
                                    "id": 22
                                }
                            ]
                        },
                        {
                            "name": "MoveSequenceSettings",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "sequence",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "TypeEffectiveSettings",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "attackScalar",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.PokemonType",
                                    "name": "attackType",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "CameraSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "nextCamera",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Enums.CameraInterpolation",
                                    "name": "interpolation",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Enums.CameraTarget",
                                    "name": "targetType",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "easeInSpeed",
                                    "id": 4
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "eastOutSpeed",
                                    "id": 5
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "durationSeconds",
                                    "id": 6
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "waitSeconds",
                                    "id": 7
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "transitionSeconds",
                                    "id": 8
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "angleDegree",
                                    "id": 9
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "angleOffsetDegree",
                                    "id": 10
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "pitchDegree",
                                    "id": 11
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "pitchOffsetDegree",
                                    "id": 12
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "rollDegree",
                                    "id": 13
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "distanceMeters",
                                    "id": 14
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "heightPercent",
                                    "id": 15
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "vertCtrRatio",
                                    "id": 16
                                }
                            ]
                        },
                        {
                            "name": "PlayerLevelSettings",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "rankNum",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "requiredExperience",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "cpMultiplier",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "maxEggPlayerLevel",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "maxEncounterPlayerLevel",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "GymLevelSettings",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "requiredExperience",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "leaderSlots",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "trainerSlots",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "searchRollBonus",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "GymBattleSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "energyPerSec",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "dodgeEnergyCost",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "retargetSeconds",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "enemyAttackInterval",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "attackServerInterval",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "roundDurationSeconds",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "bonusTimePerAllySeconds",
                                    "id": 7
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "maximumAttackersPerBattle",
                                    "id": 8
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "sameTypeAttackBonusMultiplier",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "maximumEnergy",
                                    "id": 10
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "energyDeltaPerHealthLost",
                                    "id": 11
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "dodgeDurationMs",
                                    "id": 12
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "minimumPlayerLevel",
                                    "id": 13
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "swapDurationMs",
                                    "id": 14
                                }
                            ]
                        },
                        {
                            "name": "EncounterSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "spinBonusThreshold",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "excellentThrowThreshold",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "greatThrowThreshold",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "float",
                                    "name": "niceThrowThreshold",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "milestoneThreshold",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "IapItemDisplay",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "sku",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "Enums.HoloIapItemCategory",
                                    "name": "category",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "sortOrder",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "Inventory.ItemId",
                                    "name": "itemIds",
                                    "id": 4
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "counts",
                                    "id": 5
                                }
                            ]
                        },
                        {
                            "name": "IapSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "dailyBonusCoins",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "dailyDefenderBonusPerPokemon",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "dailyDefenderBonusMaxDefenders",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "string",
                                    "name": "dailyDefenderBonusCurrency",
                                    "id": 4
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "minTimeBetweenClaimsMs",
                                    "id": 5
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "dailyBonusEnabled",
                                    "id": 6
                                },
                                {
                                    "rule": "optional",
                                    "type": "bool",
                                    "name": "dailyDefenderBonusEnabled",
                                    "id": 7
                                }
                            ]
                        },
                        {
                            "name": "PokemonUpgradeSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "upgradesPerLevel",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "allowedLevelsAbovePlayer",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "candyCost",
                                    "id": 3
                                },
                                {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "name": "stardustCost",
                                    "id": 4
                                }
                            ]
                        },
                        {
                            "name": "EquippedBadgeSettings",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "equipBadgeCooldownMs",
                                    "id": 1
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "catchProbabilityBonus",
                                    "id": 2
                                },
                                {
                                    "rule": "repeated",
                                    "type": "float",
                                    "name": "fleeProbabilityBonus",
                                    "id": 3
                                }
                            ]
                        },
                        {
                            "name": "Item",
                            "fields": [],
                            "messages": [
                                {
                                    "name": "FoodAttributes",
                                    "fields": [
                                        {
                                            "rule": "repeated",
                                            "type": "Enums.ItemEffect",
                                            "name": "itemEffect",
                                            "id": 1
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "float",
                                            "name": "itemEffectPercent",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "growthPercent",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "PotionAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "staPercent",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "staAmount",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "ReviveAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "staPercent",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "BattleAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "staPercent",
                                            "id": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "IncenseAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "incenseLifetimeSeconds",
                                            "id": 1
                                        },
                                        {
                                            "rule": "repeated",
                                            "type": "Enums.PokemonType",
                                            "name": "pokemonType",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "pokemonIncenseTypeProbability",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "standingTimeBetweenEncountersSeconds",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "movingTimeBetweenEncounterSeconds",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "distanceRequiredForShorterIntervalMeters",
                                            "id": 6
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "pokemonAttractedLengthSec",
                                            "id": 7
                                        }
                                    ]
                                },
                                {
                                    "name": "PokeballAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Enums.ItemEffect",
                                            "name": "itemEffect",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "captureMulti",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "captureMultiEffect",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "itemEffectMod",
                                            "id": 4
                                        }
                                    ]
                                },
                                {
                                    "name": "FortModifierAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "modifierLifetimeSeconds",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "troyDiskNumPokemonSpawned",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "EggIncubatorAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.EggIncubatorType",
                                            "name": "incubatorType",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "uses",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "distanceMultiplier",
                                            "id": 3
                                        }
                                    ]
                                },
                                {
                                    "name": "ExperienceBoostAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "xpMultiplier",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "boostDurationMs",
                                            "id": 2
                                        }
                                    ]
                                },
                                {
                                    "name": "InventoryUpgradeAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "additionalStorage",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Inventory.InventoryUpgradeType",
                                            "name": "upgradeType",
                                            "id": 2
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Pokemon",
                            "fields": [],
                            "messages": [
                                {
                                    "name": "StatsAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "baseStamina",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "baseAttack",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "baseDefense",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "int32",
                                            "name": "dodgeEnergyDelta",
                                            "id": 8
                                        }
                                    ]
                                },
                                {
                                    "name": "CameraAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "diskRadiusM",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "cylinderRadiusM",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "cylinderHeightM",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "cylinderGroundM",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "shoulderModeScale",
                                            "id": 5
                                        }
                                    ]
                                },
                                {
                                    "name": "EncounterAttributes",
                                    "fields": [
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "baseCaptureRate",
                                            "id": 1
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "baseFleeRate",
                                            "id": 2
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "collisionRadiusM",
                                            "id": 3
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "collisionHeightM",
                                            "id": 4
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "collisionHeadRadiusM",
                                            "id": 5
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "Enums.PokemonMovementType",
                                            "name": "movementType",
                                            "id": 6
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "movementTimerS",
                                            "id": 7
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "jumpTimeS",
                                            "id": 8
                                        },
                                        {
                                            "rule": "optional",
                                            "type": "float",
                                            "name": "attackTimerS",
                                            "id": 9
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build(["POGOProtos"]);