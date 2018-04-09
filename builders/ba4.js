module.exports = function ({_, moment, weighted}) {
  // utils
  const dollarToCent = x => x * 100
  const randomDollar = (low, high) => _.random(dollarToCent(low), dollarToCent(high))
  const randomTrueFalse = (trueWeight = 1, falseWeight = 1) => weighted([true, false], [trueWeight, falseWeight])
  const cleanArray = x => {
    const array = _.chain(x).compact().uniq().value()
    return array.length > 0 ? array : undefined
  }

  // data
  const _devices = {
    'Android': {
      '高端机型': ['g5', 'g6', 'galaxy s7', 'galaxy s7 active', 'galaxy s7 edge', 'galaxy s8', 'galaxy s8+', 'mate 9', 'moto z droid', 'moto z play dual', 'nexus 6p', 'p10 lite', 'p10', 'p9', 'p9 lite', 'pixel', 'u ultra', 'v20', 'Galaxy Note 7', '5t', 'galaxy note 7', 'galaxy note 8', 'galaxy note 8.0', 'mate 10 lite', 'mate 10 pro', 'nova 2i', 'nova lite', 'pixel', 'pixel 2', 'pixel 2 xl', 'pixel xl', 'r9s', 'v7', 'v7+', 'xperia xz', 'xperia e3', 'xperia e3 dual', 'xperia c5 ultra', 'xperia c5 ultra dual']
    }
  }
  const _creatives = {
    'en': weighted([
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212797282649999',
            'message': 'Fishing fish luvvv go fishing and camping～🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212797685983292',
            'message': 'Fishing fish luvvv go fishing and camping～🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212798159316578',
            'message': 'Fishing fish luvvv go fishing and camping～🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212799322649795',
            'message': '👊👊Wanna my fish?Absolutely Impossible!!🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212799795983081',
            'message': 'Fishing fish luvvv go fishing and camping～🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212800542649673',
            'message': 'Fishing fish luvvv go fishing and camping～🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212801402649587',
            'message': 'Fishing fish luvvv go fishing and camping～🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212802659316128',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212802035982857',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212803282649399',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212804072649320',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212804665982594',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212805229315871',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212805859315808',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212807432648984',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211799526083108',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211797979416596',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211802352749492',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211801072749620',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211800279416366',
            'message': 'Start your own brutal prehistoric adventure, come and join us now! ! ！⛺🏜 \n🔥 🔥 🔥 \n#2017BESTSTRATEGYMOBILEGAME\n💰 💰 💰\n🎮【Free download for a limited time】🎮',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      }
    ]),
    'fr': weighted([
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212797282649999',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212797685983292',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212798159316578',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212799322649795',
            'message': '👊👊Wanna my fish?Absolutely Impossible!!🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212799795983081',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212800542649673',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212801402649587',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212802659316128',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212802035982857',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212803282649399',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212804072649320',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212804665982594',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212805229315871',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212805859315808',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212807432648984',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211799526083108',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211797979416596',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211802352749492',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211801072749620',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211800279416366',
            'message': 'Rejoins la horde et prépare-toi au combat ! Que la bataille commence !👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      }
    ]),
    'de': weighted([
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212797282649999',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212797685983292',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212798159316578',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212799322649795',
            'message': '👊👊Wanna my fish?Absolutely Impossible!!🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212799795983081',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212800542649673',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212801402649587',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212802659316128',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212802035982857',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212803282649399',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212804072649320',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212804665982594',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212805229315871',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212805859315808',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212807432648984',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211799526083108',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211797979416596',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211802352749492',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211801072749620',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211800279416366',
            'message': '🎣🎣Schließ dich der Horde an und bereite dich zum Kampf vor! Lasst die Schlacht beginnen!👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      }
    ]),
    'zh': weighted([
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212797282649999',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212797685983292',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212798159316578',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212799322649795',
            'message': '👊👊Wanna my fish?Absolutely Impossible!!🎣🎣⛺️⛺️',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212799795983081',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212800542649673',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212801402649587',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212802659316128',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212802035982857',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212803282649399',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212804072649320',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212804665982594',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212805229315871',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212805859315808',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '212807432648984',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211799526083108',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211797979416596',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211802352749492',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211801072749620',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      },
      {
        'object_story_spec': {
          'page_id': '1643949305846284',
          'video_data': {
            'video_id': '211800279416366',
            'message': '加入部落，準備戰鬥！立即開戰！👊👊👊',
            'call_to_action': {
              'type': 'PLAY_GAME',
              'value': {
                'application': '634204786734953',
                'link': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
              }
            },
            'image_hash': 'e1a03594ef2260cc5e0be1954ac5addd'
          }
        }
      }
    ])
  }
  const _names = ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Charles', 'Thomas', 'Christopher', 'Daniel', 'Matthew', 'George', 'Donald', 'Anthony', 'Paul', 'Mark', 'Edward', 'Steven', 'Kenneth', 'Andrew', 'Brian', 'Joshua', 'Kevin', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Frank', 'Gary', 'Ryan', 'Nicholas', 'Eric', 'Stephen', 'Jacob', 'Larry', 'Jonathan', 'Scott', 'Raymond', 'Justin', 'Brandon', 'Gregory', 'Samuel', 'Benjamin', 'Patrick', 'Jack', 'Henry', 'Walter', 'Dennis', 'Jerry', 'Alexander', 'Peter', 'Tyler', 'Douglas', 'Harold', 'Aaron', 'Jose', 'Adam', 'Arthur', 'Zachary', 'Carl', 'Nathan', 'Albert', 'Kyle', 'Lawrence', 'Joe', 'Willie', 'Gerald', 'Roger', 'Keith', 'Jeremy', 'Terry', 'Harry', 'Ralph', 'Sean', 'Jesse', 'Roy', 'Louis', 'Billy', 'Austin', 'Bruce', 'Eugene', 'Christian', 'Bryan', 'Wayne', 'Russell', 'Howard', 'Fred', 'Ethan', 'Jordan', 'Philip', 'Alan', 'Juan', 'Randy', 'Vincent', 'Bobby', 'Dylan', 'Johnny', 'Phillip', 'Victor', 'Clarence', 'Ernest', 'Martin', 'Craig', 'Stanley', 'Shawn', 'Travis', 'Bradley', 'Leonard', 'Earl', 'Gabriel', 'Jimmy', 'Francis', 'Todd', 'Noah', 'Danny', 'Dale', 'Cody', 'Carlos', 'Allen', 'Frederick', 'Logan', 'Curtis', 'Alex', 'Joel', 'Luis', 'Norman', 'Marvin', 'Glenn', 'Tony', 'Nathaniel', 'Rodney', 'Melvin', 'Alfred', 'Steve', 'Cameron', 'Chad', 'Edwin', 'Caleb', 'Evan', 'Antonio', 'Lee', 'Herbert', 'Jeffery', 'Isaac', 'Derek', 'Ricky', 'Marcus', 'Theodore', 'Elijah', 'Luke', 'Jesus', 'Eddie', 'Troy', 'Mike', 'Dustin', 'Ray', 'Adrian', 'Bernard', 'Leroy', 'Angel', 'Randall', 'Wesley', 'Ian', 'Jared', 'Mason', 'Hunter', 'Calvin', 'Oscar', 'Clifford', 'Jay', 'Shane', 'Ronnie', 'Barry', 'Lucas', 'Corey', 'Manuel', 'Leo', 'Tommy', 'Warren', 'Jackson', 'Isaiah', 'Connor', 'Don', 'Dean', 'Jon', 'Julian', 'Miguel', 'Bill', 'Lloyd', 'Charlie', 'Mitchell', 'Leon', 'Jerome', 'Darrell', 'Jeremiah', 'Alvin', 'Brett', 'Seth', 'Floyd', 'Jim', 'Blake', 'Micheal', 'Gordon', 'Trevor', 'Lewis', 'Erik', 'Edgar', 'Vernon', 'Devin', 'Gavin', 'Jayden', 'Chris', 'Clyde', 'Tom', 'Derrick', 'Mario', 'Brent', 'Marc', 'Herman', 'Chase', 'Dominic', 'Ricardo', 'Franklin', 'Maurice', 'Max', 'Aiden', 'Owen', 'Lester', 'Gilbert', 'Elmer', 'Gene', 'Francisco', 'Glen', 'Cory', 'Garrett', 'Clayton', 'Sam', 'Jorge', 'Chester', 'Alejandro', 'Jeff', 'Harvey', 'Milton', 'Cole', 'Ivan', 'Andre', 'Duane', 'Landon']
  const _customAudience = {
    '美国': weighted([
      [
        {
          'id': '23842749271360541',
          'name': 'Lookalike (US, 1% to 2%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749271350541',
          'name': 'Lookalike (US, 2% to 5%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749271310541',
          'name': 'Lookalike (US, 1%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749271230541',
          'name': 'Lookalike (Android (all), 1% to 2%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749270470541',
          'name': 'Lookalike (US, 2% to 5%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749270460541',
          'name': 'Lookalike (US, 1% to 2%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749270440541',
          'name': 'Lookalike (US, 1%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749269920541',
          'name': 'Lookalike (US, 2% to 5%) - 0130_all_paylt351_trans_gt351-paytime'
        }
      ],
      [
        {
          'id': '23842749269910541',
          'name': 'Lookalike (US, 1% to 2%) - 0130_all_paylt351_trans_gt351-paytime'
        }
      ],
      [
        {
          'id': '23842749269890541',
          'name': 'Lookalike (US, 1%) - 0130_all_paylt351_trans_gt351-paytime'
        }
      ],
      [
        {
          'id': '23842749269070541',
          'name': 'Lookalike (US, 2% to 5%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749269060541',
          'name': 'Lookalike (US, 1% to 2%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749269040541',
          'name': 'Lookalike (US, 1%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749268330541',
          'name': 'Lookalike (US, 1% to 2%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268320541',
          'name': 'Lookalike (US, 2% to 5%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268290541',
          'name': 'Lookalike (US, 1%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749261770541',
          'name': 'Lookalike (US, 1% to 2%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261760541',
          'name': 'Lookalike (US, 2% to 5%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261740541',
          'name': 'Lookalike (US, 1%) - 0130_all_value_gt2k_T-paytime'
        }
      ]
    ]),
    'T1 英语': weighted([
      [
        {
          'id': '23842749271230541',
          'name': 'Lookalike (Android (all), 1% to 2%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749271220541',
          'name': 'Lookalike (Android (all), 2% to 5%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749271090541',
          'name': 'Lookalike (Android (all), 1%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749270910541',
          'name': 'Lookalike (EEA, AU and 2 others, 2% to 5%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749270900541',
          'name': 'Lookalike (EEA, AU and 2 others, 1% to 2%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749270850541',
          'name': 'Lookalike (EEA, AU and 2 others, 1%) - 0130_all_paylt10_trans_gt20-paytime'
        }
      ],
      [
        {
          'id': '23842749270370541',
          'name': 'Lookalike (Android (all), 2% to 5%) - 0130_all_paylt351_trans_gt351-paytime'
        }
      ],
      [
        {
          'id': '23842749270360541',
          'name': 'Lookalike (Android (all), 1% to 2%) - 0130_all_paylt351_trans_gt351-paytime'
        }
      ],
      [
        {
          'id': '23842749270240541',
          'name': 'Lookalike (Android (all), 1%) - 0130_all_paylt351_trans_gt351-paytime'
        }
      ],
      [
        {
          'id': '23842749270210541',
          'name': 'Lookalike (EEA, AU and 2 others, 2% to 5%) - 0130_all_paylt351_trans_gt351-payti...'
        }
      ],
      [
        {
          'id': '23842749270200541',
          'name': 'Lookalike (EEA, AU and 2 others, 1% to 2%) - 0130_all_paylt351_trans_gt351-payti...'
        }
      ],
      [
        {
          'id': '23842749270150541',
          'name': 'Lookalike (EEA, AU and 2 others, 1%) - 0130_all_paylt351_trans_gt351-paytime'
        }
      ],
      [
        {
          'id': '23842749268660541',
          'name': 'Lookalike (EEA, AU and 4 others, 1% to 2%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268650541',
          'name': 'Lookalike (EEA, AU and 4 others, 2% to 5%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268550541',
          'name': 'Lookalike (EEA, AU and 4 others, 1%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749261980541',
          'name': 'Lookalike (EEA, AU and 3 others, 1% to 2%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261970541',
          'name': 'Lookalike (EEA, AU and 3 others, 2% to 5%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261880541',
          'name': 'Lookalike (EEA, AU and 3 others, 1%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749255840541',
          'name': 'Lookalike (EEA, AU, CA, 1% to 2%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255830541',
          'name': 'Lookalike (EEA, AU, CA, 2% to 5%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255800541',
          'name': 'Lookalike (EEA, AU, CA, 1%) - 0305_jn_LAL_ - ios'
        }
      ]
    ]),
    'T1 法语': weighted([
      [
        {
          'id': '23842749269240541',
          'name': 'Lookalike (EEA, AU and 2 others, 2% to 5%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749269230541',
          'name': 'Lookalike (EEA, AU and 2 others, 1% to 2%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749269190541',
          'name': 'Lookalike (EEA, AU and 2 others, 1%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749268660541',
          'name': 'Lookalike (EEA, AU and 4 others, 1% to 2%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268650541',
          'name': 'Lookalike (EEA, AU and 4 others, 2% to 5%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268550541',
          'name': 'Lookalike (EEA, AU and 4 others, 1%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749261980541',
          'name': 'Lookalike (EEA, AU and 3 others, 1% to 2%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261970541',
          'name': 'Lookalike (EEA, AU and 3 others, 2% to 5%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261880541',
          'name': 'Lookalike (EEA, AU and 3 others, 1%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749255840541',
          'name': 'Lookalike (EEA, AU, CA, 1% to 2%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255830541',
          'name': 'Lookalike (EEA, AU, CA, 2% to 5%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255800541',
          'name': 'Lookalike (EEA, AU, CA, 1%) - 0305_jn_LAL_ - ios'
        }
      ]
    ]),
    'T1 德语': weighted([
      [
        {
          'id': '23842749269240541',
          'name': 'Lookalike (EEA, AU and 2 others, 2% to 5%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749269230541',
          'name': 'Lookalike (EEA, AU and 2 others, 1% to 2%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749269190541',
          'name': 'Lookalike (EEA, AU and 2 others, 1%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749268660541',
          'name': 'Lookalike (EEA, AU and 4 others, 1% to 2%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268650541',
          'name': 'Lookalike (EEA, AU and 4 others, 2% to 5%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268550541',
          'name': 'Lookalike (EEA, AU and 4 others, 1%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749261980541',
          'name': 'Lookalike (EEA, AU and 3 others, 1% to 2%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261970541',
          'name': 'Lookalike (EEA, AU and 3 others, 2% to 5%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261880541',
          'name': 'Lookalike (EEA, AU and 3 others, 1%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749273810541',
          'name': 'Lookalike (EEA, AU and 2 others, 1%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749273900541',
          'name': 'Lookalike (EEA, AU and 2 others, 1% to 2%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749273890541',
          'name': 'Lookalike (EEA, AU and 2 others, 2% to 5%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749255840541',
          'name': 'Lookalike (EEA, AU, CA, 1% to 2%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255830541',
          'name': 'Lookalike (EEA, AU, CA, 2% to 5%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255800541',
          'name': 'Lookalike (EEA, AU, CA, 1%) - 0305_jn_LAL_ - ios'
        }
      ]
    ]),
    'T1 中文': weighted([
      [
        {
          'id': '23842749256030541',
          'name': 'Lookalike (iTunes, 2% to 5%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749256010541',
          'name': 'Lookalike (iTunes, 1% to 2%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255920541',
          'name': 'Lookalike (iTunes, 1%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749257320541',
          'name': 'Lookalike (Android (all), 1% to 2%) - 0305_jn_LAL_ - android'
        }
      ],
      [
        {
          'id': '23842749257310541',
          'name': 'Lookalike (Android (all), 2% to 5%) - 0305_jn_LAL_ - android'
        }
      ],
      [
        {
          'id': '23842749257140541',
          'name': 'Lookalike (Android (all), 1%) - 0305_jn_LAL_ - android'
        }
      ]
    ]),
    'ROW': weighted([
      [
        {
          'id': '23842749269240541',
          'name': 'Lookalike (EEA, AU and 2 others, 2% to 5%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749269230541',
          'name': 'Lookalike (EEA, AU and 2 others, 1% to 2%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749269190541',
          'name': 'Lookalike (EEA, AU and 2 others, 1%) - 0130_all_paytime_gt_200-payment'
        }
      ],
      [
        {
          'id': '23842749268660541',
          'name': 'Lookalike (EEA, AU and 4 others, 1% to 2%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268650541',
          'name': 'Lookalike (EEA, AU and 4 others, 2% to 5%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749268550541',
          'name': 'Lookalike (EEA, AU and 4 others, 1%) - 0130_all_paytime_gt_average-paytime'
        }
      ],
      [
        {
          'id': '23842749261980541',
          'name': 'Lookalike (EEA, AU and 3 others, 1% to 2%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261970541',
          'name': 'Lookalike (EEA, AU and 3 others, 2% to 5%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749261880541',
          'name': 'Lookalike (EEA, AU and 3 others, 1%) - 0130_all_value_gt2k_T-paytime'
        }
      ],
      [
        {
          'id': '23842749273810541',
          'name': 'Lookalike (EEA, AU and 2 others, 1%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749273900541',
          'name': 'Lookalike (EEA, AU and 2 others, 1% to 2%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749273890541',
          'name': 'Lookalike (EEA, AU and 2 others, 2% to 5%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749255840541',
          'name': 'Lookalike (EEA, AU, CA, 1% to 2%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255830541',
          'name': 'Lookalike (EEA, AU, CA, 2% to 5%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255800541',
          'name': 'Lookalike (EEA, AU, CA, 1%) - 0305_jn_LAL_ - ios'
        }
      ]
    ]),
    '欧盟 英语': weighted([
      [
        {
          'id': '23842749273810541',
          'name': 'Lookalike (EEA, AU and 2 others, 1%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749273900541',
          'name': 'Lookalike (EEA, AU and 2 others, 1% to 2%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749273890541',
          'name': 'Lookalike (EEA, AU and 2 others, 2% to 5%) - 0130_all_pay_gt_4k-true-paytime'
        }
      ],
      [
        {
          'id': '23842749255840541',
          'name': 'Lookalike (EEA, AU, CA, 1% to 2%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255830541',
          'name': 'Lookalike (EEA, AU, CA, 2% to 5%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749255800541',
          'name': 'Lookalike (EEA, AU, CA, 1%) - 0305_jn_LAL_ - ios'
        }
      ],
      [
        {
          'id': '23842749256900541',
          'name': 'Lookalike (EEA, AU and 3 others, 1% to 2%) - 0305_jn_LAL_ - android'
        }
      ],
      [
        {
          'id': '23842749256890541',
          'name': 'Lookalike (EEA, AU and 3 others, 2% to 5%) - 0305_jn_LAL_ - android'
        }
      ],
      [
        {
          'id': '23842749256840541',
          'name': 'Lookalike (EEA, AU and 3 others, 1%) - 0305_jn_LAL_ - android'
        }
      ],
      [
        {
          'id': '23842749261500541',
          'name': 'Lookalike (EEA, AU and 3 others, 2% to 5%) - 0131_all_paygt20_lt351_true-paytime'
        }
      ],
      [
        {
          'id': '23842749261420541',
          'name': 'Lookalike (EEA, AU and 3 others, 1%) - 0131_all_paygt20_lt351_true-paytime'
        }
      ]
    ]),
  }

  // controls
  const _game = 'BA'
  const _os = 'Android'
  const _location = weighted([
    '美国',
    'T1 英语',
    'T1 法语',
    'T1 德语',
    'T1 中文',
    'ROW',
    '欧盟 英语'
  ])
  const _language = {
    '美国': 'en',
    'T1 英语': 'en',
    'T1 法语': 'fr',
    'T1 德语': 'de',
    'T1 中文': 'zh',
    'ROW': 'en',
    '欧盟 英语': 'en'
  }[_location]
  const _platformFacebookFeed = randomTrueFalse(3, 1)
  const _platformFacebookSuggestedVideo = _platformFacebookFeed && randomTrueFalse()
  const _platformInstagramStream = !_platformFacebookFeed || randomTrueFalse() // all other positions rely on facebook feed. so if facebook feed is disabled, the only instagram position must be selected
  const _platformAudienceNetworkClassic = _platformFacebookFeed && randomTrueFalse()
  const _platformAudienceNetworkRewardedVideo = _platformFacebookFeed && randomTrueFalse()

  // fields
  const name = `BA4 ${moment().format('YYYY-MM-DD HH:mm:ss')} ${weighted(_names)}`
  const status = 'ACTIVE'
  const dailyBudget = dollarToCent(5000)
  const billingEvent = 'IMPRESSIONS'
  const optimizationGoal = weighted([
    // 'APP_INSTALLS',
    'OFFSITE_CONVERSIONS'
  ])
  const bidAmount = {
    'APP_INSTALLS': 0,
    'OFFSITE_CONVERSIONS': {
      '美国': randomDollar(150, 600),
      'T1 英语': randomDollar(150, 600),
      'T1 法语': randomDollar(150, 600),
      'T1 德语': randomDollar(150, 600),
      'T1 中文': randomDollar(150, 600),
      'ROW': randomDollar(100, 350),
      '欧盟 英语': randomDollar(150, 600)
    }[_location]
  }[optimizationGoal]
  const attributionSpec = {
    'APP_INSTALLS': undefined,
    'OFFSITE_CONVERSIONS': [{'event_type': 'CLICK_THROUGH', 'window_days': 7}]
  }[optimizationGoal]
  const objective = 'APP_INSTALLS'
  const buyingType = 'AUCTION'
  const promotedObject = {
    'APP_INSTALLS': {
      'application_id': '634204786734953',
      'object_store_url': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test'
    },
    'OFFSITE_CONVERSIONS': {
      'application_id': '634204786734953',
      'object_store_url': 'http://play.google.com/store/apps/details?id=com.tap4fun.brutalage_test',
      'custom_event_type': 'PURCHASE'
    }
  }[optimizationGoal]
  const minAge = 18
  const maxAge = 55
  const appInstallState = 'not_installed'
  const genders = [1]
  const locationTypes = ['home', 'recent']
  const countryGroups = {
    'ROW': ['android_paid_store'],
    '欧盟 英语': ['eea']
  }[_location]
  const countries = {
    '美国': ['US'],
    'T1 英语': ['CA', 'SG', 'GB', 'AU'],
    'T1 法语': ['LU', 'FR'],
    'T1 德语': ['SE', 'CH', 'DK', 'DE'],
    'T1 中文': ['HK', 'TW']
  }[_location]
  const excludedPublisherCategories = [
    'debated_social_issues',
    'tragedy_and_conflict'
  ]
  const customAudiences = _customAudience[_location]
  const excludedGeoLocations = {
    'ROW': {
      'countries': [
        'PK', 'IN'
      ],
      'location_types': [
        'home'
      ]
    }
  }[_location]
  const publisherPlatforms = cleanArray([
    _platformFacebookFeed && 'facebook',
    _platformFacebookSuggestedVideo && 'facebook',
    _platformInstagramStream && 'instagram',
    _platformAudienceNetworkClassic && 'audience_network',
    _platformAudienceNetworkRewardedVideo && 'audience_network',
  ])
  const facebookPositions = cleanArray([
    _platformFacebookFeed && 'feed',
    _platformFacebookSuggestedVideo && 'suggested_video'
  ])
  const instagramPositions = cleanArray([
    _platformInstagramStream && 'stream',
  ])
  const audienceNetworkPositions = cleanArray([
    _platformAudienceNetworkClassic && 'classic',
    _platformAudienceNetworkRewardedVideo && 'rewarded_video'
  ])
  const userOs = {
    'Android': ['Android_ver_6.0_and_above']
  }[_os]
  const userDevice = {
    'Android': _devices['Android']['高端机型']
  }[_os]
  const creative = _creatives[_language]

  return {
    name: name,
    status: status,
    adset_spec: {
      name: name,
      status: status,
      daily_budget: dailyBudget,
      bid_amount: bidAmount,
      billing_event: billingEvent,
      attribution_spec: attributionSpec,
      campaign_spec: {
        name: name,
        status: status,
        objective: objective,
        buying_type: buyingType
      },
      optimization_goal: optimizationGoal,
      promoted_object: promotedObject,
      targeting: {
        age_max: maxAge,
        age_min: minAge,
        app_install_state: appInstallState,
        genders: genders,
        geo_locations: {
          countries: countries,
          country_groups: countryGroups,
          location_types: locationTypes
        },
        excluded_publisher_categories: excludedPublisherCategories,
        custom_audiences: customAudiences,
        excluded_geo_locations: excludedGeoLocations,
        publisher_platforms: publisherPlatforms,
        facebook_positions: facebookPositions,
        instagram_positions: instagramPositions,
        audience_network_positions: audienceNetworkPositions,
        user_os: userOs,
        user_device: userDevice
      }
    },
    creative: creative,
  }
}
