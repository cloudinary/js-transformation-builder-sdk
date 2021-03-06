window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "base",
          "bootstrap",
          "foodoc",
          "handlebar",
          "index",
          "jsdoc3",
          "readm",
          "templat"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "undefined": [
          "car",
          "drive",
          "tutori"
        ],
        "list_tutorial.html": [
          "avail",
          "list",
          "list:tutori",
          "tutori"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_namespace.html": [
          "document",
          "list",
          "list:namespac",
          "namespac"
        ],
        "CustomError.html": [
          "class",
          "custom",
          "customerror",
          "document",
          "dummi",
          "error",
          "error.prototyp",
          "file",
          "fix",
          "global",
          "implement",
          "inherit",
          "object",
          "stack",
          "test",
          "trace"
        ],
        "GlobalClass.html": [
          "case",
          "class",
          "depth",
          "descript",
          "explan",
          "gener",
          "global",
          "globalclass",
          "it'",
          "markdown",
          "meant",
          "more",
          "summari",
          "test",
          "us"
        ],
        "GlobalClass.html#name": [
          "class",
          "globalclass#nam",
          "member",
          "name",
          "string"
        ],
        "GlobalClass.html#_privateMember": [
          "_privatememb",
          "class",
          "globalclass#_privatememb",
          "lt;private&gt",
          "member",
          "privat",
          "string"
        ],
        "GlobalClass.html#testMethod": [
          "check",
          "class",
          "definit",
          "document",
          "function",
          "global",
          "globalclass#testmethod",
          "instanc",
          "method",
          "test",
          "testmethod",
          "type"
        ],
        "MyApi.Class.html": [
          "case",
          "class",
          "depth",
          "descript",
          "explan",
          "gener",
          "it'",
          "markdown",
          "meant",
          "more",
          "myapi",
          "myapi.class",
          "summari",
          "test",
          "us"
        ],
        "MyApi.Class.html#publicMember": [
          "class",
          "class#publicmemb",
          "i'm",
          "member",
          "myapi.class#publicmemb",
          "publicmemb",
          "string"
        ],
        "MyApi.Class.html#protectedMember": [
          "class",
          "class#protectedmemb",
          "i'm",
          "lt;protected&gt",
          "member",
          "myapi.class#protectedmemb",
          "protect",
          "protectedmemb",
          "string"
        ],
        "MyApi.Class.html#_privateMember": [
          "_privatememb",
          "class",
          "class#_privatememb",
          "i'm",
          "lt;private&gt",
          "member",
          "myapi.class#_privatememb",
          "privat",
          "string"
        ],
        "MyApi.Class.html#testMethod": [
          "class",
          "class#testmethod",
          "function",
          "inherit",
          "instanc",
          "markdown",
          "method",
          "myapi",
          "myapi.child",
          "myapi.class#testmethod",
          "obj",
          "object",
          "objn",
          "overridden",
          "simpli",
          "test",
          "testmethod",
          "valu"
        ],
        "MyApi.Class.html#anotherMethod": [
          "anoth",
          "anothermethod",
          "appli",
          "class",
          "class#anothermethod",
          "document",
          "except",
          "function",
          "instanc",
          "longer",
          "markdown",
          "method",
          "myapi",
          "myapi.child",
          "myapi.class#anothermethod",
          "obj",
          "object",
          "objn",
          "overridden",
          "remov",
          "test",
          "valu"
        ],
        "MyApi.Class.html#~Object": [
          "class",
          "class~object",
          "definit",
          "myapi.class",
          "myapi.class~object",
          "object",
          "test",
          "type",
          "typedef"
        ],
        "MyApi.Child.html": [
          "child",
          "class",
          "markdown",
          "myapi",
          "myapi.child",
          "summari",
          "test"
        ],
        "MyApi.Child.html#protectedMember": [
          "child#protectedmemb",
          "class",
          "i'm",
          "lt;protected&gt",
          "member",
          "myapi.child#protectedmemb",
          "protect",
          "protectedmemb",
          "string"
        ],
        "MyApi.Child.html#publicMember": [
          "child#publicmemb",
          "class",
          "i'm",
          "member",
          "myapi.child#publicmemb",
          "publicmemb",
          "string"
        ],
        "MyApi.Child.html#_privateMember": [
          "_privatememb",
          "child#_privatememb",
          "class",
          "i'm",
          "lt;private&gt",
          "member",
          "myapi.child#_privatememb",
          "privat",
          "string"
        ],
        "MyApi.Child.html#anotherMethod": [
          "anoth",
          "anothermethod",
          "appli",
          "child",
          "child#anothermethod",
          "class",
          "document",
          "event",
          "except",
          "function",
          "inherit",
          "instanc",
          "longer",
          "markdown",
          "method",
          "myapi",
          "myapi.child#anothermethod",
          "myapi.class#anothermethod",
          "obj",
          "object",
          "objn",
          "on",
          "overrid",
          "rais",
          "reflect",
          "remov",
          "test",
          "updat",
          "valu"
        ],
        "MyApi.Child.html#testMethod": [
          "child#testmethod",
          "class",
          "function",
          "inherit",
          "instanc",
          "markdown",
          "method",
          "myapi",
          "myapi.child",
          "myapi.child#testmethod",
          "obj",
          "object",
          "objn",
          "overridden",
          "simpli",
          "test",
          "testmethod",
          "valu"
        ],
        "MyApi.html": [
          "better",
          "code",
          "contain",
          "descript",
          "give",
          "idea",
          "longer",
          "myapi",
          "namespac",
          "summari",
          "test",
          "within"
        ],
        "MyApi.html#.staticMember": [
          "lt;static&gt",
          "member",
          "myapi.staticmemb",
          "namespac",
          "static",
          "staticmemb",
          "string"
        ],
        "MyApi.html#~Object": [
          "definit",
          "myapi",
          "myapi~object",
          "namespac",
          "object",
          "test",
          "type",
          "typedef"
        ],
        "MyApi.utils.html": [
          "child",
          "myapi.util",
          "namespac",
          "test",
          "util"
        ],
        "MyApi.utils.html#.format": [
          "arg",
          "argn",
          "format",
          "function",
          "given",
          "index",
          "lt;static&gt",
          "myapi.utils.format",
          "replac",
          "str",
          "string",
          "suppli",
          "utils.format"
        ]
      },
      "length": 29
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "b": {
          "docs": {},
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 14
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 14
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "u": {
              "docs": {},
              "s": {
                "docs": {},
                "h": {
                  "docs": {
                    "undefined": {
                      "tf": 985
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "MyApi.html": {
                        "ref": "MyApi.html",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "d": {
                "docs": {},
                "o": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 600
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "m": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "MyApi.utils.html#.format": {
                        "ref": "MyApi.utils.html#.format",
                        "tf": 626.6666666666666
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {
                  "undefined": {
                    "tf": 950
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {
                  "CustomError.html": {
                    "ref": "CustomError.html",
                    "tf": 3.8461538461538463
                  }
                }
              }
            },
            "x": {
              "docs": {
                "CustomError.html": {
                  "ref": "CustomError.html",
                  "tf": 3.8461538461538463
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "GlobalClass.html#testMethod": {
                            "ref": "GlobalClass.html#testMethod",
                            "tf": 110
                          },
                          "MyApi.Class.html#testMethod": {
                            "ref": "MyApi.Class.html#testMethod",
                            "tf": 110
                          },
                          "MyApi.Class.html#anotherMethod": {
                            "ref": "MyApi.Class.html#anotherMethod",
                            "tf": 110
                          },
                          "MyApi.Child.html#anotherMethod": {
                            "ref": "MyApi.Child.html#anotherMethod",
                            "tf": 110
                          },
                          "MyApi.Child.html#testMethod": {
                            "ref": "MyApi.Child.html#testMethod",
                            "tf": 110
                          },
                          "MyApi.utils.html#.format": {
                            "ref": "MyApi.utils.html#.format",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "b": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 14
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "g": {
              "docs": {},
              "h": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "undefined": {
                              "tf": 23.333333333333332
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    },
                    "MyApi.utils.html#.format": {
                      "ref": "MyApi.utils.html#.format",
                      "tf": 10
                    }
                  }
                }
              }
            },
            "h": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "CustomError.html": {
                          "ref": "CustomError.html",
                          "tf": 3.8461538461538463
                        },
                        "MyApi.Class.html#testMethod": {
                          "ref": "MyApi.Class.html#testMethod",
                          "tf": 8.333333333333332
                        },
                        "MyApi.Child.html#anotherMethod": {
                          "ref": "MyApi.Child.html#anotherMethod",
                          "tf": 3.3333333333333335
                        },
                        "MyApi.Child.html#testMethod": {
                          "ref": "MyApi.Child.html#testMethod",
                          "tf": 8.333333333333332
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "GlobalClass.html#testMethod": {
                          "ref": "GlobalClass.html#testMethod",
                          "tf": 6.363636363636364
                        },
                        "MyApi.Class.html#testMethod": {
                          "ref": "MyApi.Class.html#testMethod",
                          "tf": 8.75
                        },
                        "MyApi.Class.html#anotherMethod": {
                          "ref": "MyApi.Class.html#anotherMethod",
                          "tf": 7.777777777777778
                        },
                        "MyApi.Child.html#anotherMethod": {
                          "ref": "MyApi.Child.html#anotherMethod",
                          "tf": 7.777777777777778
                        },
                        "MyApi.Child.html#testMethod": {
                          "ref": "MyApi.Child.html#testMethod",
                          "tf": 8.75
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "CustomError.html": {
                              "ref": "CustomError.html",
                              "tf": 3.8461538461538463
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "'": {
              "docs": {
                "GlobalClass.html": {
                  "ref": "GlobalClass.html",
                  "tf": 3.8461538461538463
                },
                "MyApi.Class.html": {
                  "ref": "MyApi.Class.html",
                  "tf": 3.8461538461538463
                }
              }
            }
          },
          "'": {
            "docs": {},
            "m": {
              "docs": {
                "MyApi.Class.html#publicMember": {
                  "ref": "MyApi.Class.html#publicMember",
                  "tf": 23.333333333333332
                },
                "MyApi.Class.html#protectedMember": {
                  "ref": "MyApi.Class.html#protectedMember",
                  "tf": 17.5
                },
                "MyApi.Class.html#_privateMember": {
                  "ref": "MyApi.Class.html#_privateMember",
                  "tf": 17.5
                },
                "MyApi.Child.html#protectedMember": {
                  "ref": "MyApi.Child.html#protectedMember",
                  "tf": 17.5
                },
                "MyApi.Child.html#publicMember": {
                  "ref": "MyApi.Child.html#publicMember",
                  "tf": 23.333333333333332
                },
                "MyApi.Child.html#_privateMember": {
                  "ref": "MyApi.Child.html#_privateMember",
                  "tf": 17.5
                }
              }
            }
          },
          "d": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {
                  "MyApi.html": {
                    "ref": "MyApi.html",
                    "tf": 5.555555555555555
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {},
            "d": {
              "docs": {},
              "o": {
                "docs": {},
                "c": {
                  "3": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 14
                      }
                    }
                  },
                  "docs": {}
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "MyApi.Class.html#anotherMethod": {
                      "ref": "MyApi.Class.html#anotherMethod",
                      "tf": 5.555555555555555
                    },
                    "MyApi.Child.html#anotherMethod": {
                      "ref": "MyApi.Child.html#anotherMethod",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "MyApi.Child.html#anotherMethod": {
                          "ref": "MyApi.Child.html#anotherMethod",
                          "tf": 3.3333333333333335
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "MyApi.utils.html#.format": {
                        "ref": "MyApi.utils.html#.format",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "i": {
              "docs": {},
              "s": {
                "docs": {
                  "MyApi.Child.html#anotherMethod": {
                    "ref": "MyApi.Child.html#anotherMethod",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 14
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "undefined": {
                      "tf": 985
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "undefined": {
                    "tf": 973.3333333333334
                  },
                  "CustomError.html": {
                    "ref": "CustomError.html",
                    "tf": 7.6923076923076925
                  },
                  "GlobalClass.html": {
                    "ref": "GlobalClass.html",
                    "tf": 27.17948717948718
                  },
                  "GlobalClass.html#testMethod": {
                    "ref": "GlobalClass.html#testMethod",
                    "tf": 12.727272727272728
                  },
                  "MyApi.Class.html": {
                    "ref": "MyApi.Class.html",
                    "tf": 27.17948717948718
                  },
                  "MyApi.Class.html#testMethod": {
                    "ref": "MyApi.Class.html#testMethod",
                    "tf": 26.25
                  },
                  "MyApi.Class.html#anotherMethod": {
                    "ref": "MyApi.Class.html#anotherMethod",
                    "tf": 23.333333333333332
                  },
                  "MyApi.Class.html#~Object": {
                    "ref": "MyApi.Class.html#~Object",
                    "tf": 14
                  },
                  "MyApi.Child.html": {
                    "ref": "MyApi.Child.html",
                    "tf": 11.666666666666666
                  },
                  "MyApi.Child.html#anotherMethod": {
                    "ref": "MyApi.Child.html#anotherMethod",
                    "tf": 15.555555555555555
                  },
                  "MyApi.Child.html#testMethod": {
                    "ref": "MyApi.Child.html#testMethod",
                    "tf": 26.25
                  },
                  "MyApi.html": {
                    "ref": "MyApi.html",
                    "tf": 17.5
                  },
                  "MyApi.html#~Object": {
                    "ref": "MyApi.html#~Object",
                    "tf": 14
                  },
                  "MyApi.utils.html": {
                    "ref": "MyApi.utils.html",
                    "tf": 23.333333333333332
                  }
                },
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "GlobalClass.html#testMethod": {
                                "ref": "GlobalClass.html#testMethod",
                                "tf": 700
                              },
                              "MyApi.Class.html#testMethod": {
                                "ref": "MyApi.Class.html#testMethod",
                                "tf": 620
                              },
                              "MyApi.Child.html#testMethod": {
                                "ref": "MyApi.Child.html#testMethod",
                                "tf": 620
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "undefined": {
                        "tf": 110
                      },
                      "list_tutorial.html": {
                        "ref": "list_tutorial.html",
                        "tf": 635
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "e": {
                  "docs": {
                    "CustomError.html": {
                      "ref": "CustomError.html",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {
                  "GlobalClass.html#testMethod": {
                    "ref": "GlobalClass.html#testMethod",
                    "tf": 56.36363636363637
                  },
                  "MyApi.Class.html#~Object": {
                    "ref": "MyApi.Class.html#~Object",
                    "tf": 14
                  },
                  "MyApi.html#~Object": {
                    "ref": "MyApi.html#~Object",
                    "tf": 14
                  }
                },
                "d": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "f": {
                      "docs": {
                        "MyApi.Class.html#~Object": {
                          "ref": "MyApi.Class.html#~Object",
                          "tf": 110
                        },
                        "MyApi.html#~Object": {
                          "ref": "MyApi.html#~Object",
                          "tf": 110
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 35
                          },
                          "CustomError.html": {
                            "ref": "CustomError.html",
                            "tf": 3.8461538461538463
                          },
                          "GlobalClass.html#testMethod": {
                            "ref": "GlobalClass.html#testMethod",
                            "tf": 6.363636363636364
                          },
                          "MyApi.Class.html#anotherMethod": {
                            "ref": "MyApi.Class.html#anotherMethod",
                            "tf": 5.555555555555555
                          },
                          "MyApi.Child.html#anotherMethod": {
                            "ref": "MyApi.Child.html#anotherMethod",
                            "tf": 3.3333333333333335
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "i": {
              "docs": {},
              "v": {
                "docs": {},
                "e": {
                  "docs": {
                    "undefined": {
                      "tf": 985
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {
                    "CustomError.html": {
                      "ref": "CustomError.html",
                      "tf": 7.6923076923076925
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "p": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "GlobalClass.html": {
                      "ref": "GlobalClass.html",
                      "tf": 3.8461538461538463
                    },
                    "MyApi.Class.html": {
                      "ref": "MyApi.Class.html",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "c": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "GlobalClass.html": {
                            "ref": "GlobalClass.html",
                            "tf": 3.8461538461538463
                          },
                          "MyApi.Class.html": {
                            "ref": "MyApi.Class.html",
                            "tf": 3.8461538461538463
                          },
                          "MyApi.html": {
                            "ref": "MyApi.html",
                            "tf": 5.555555555555555
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "GlobalClass.html#testMethod": {
                          "ref": "GlobalClass.html#testMethod",
                          "tf": 6.363636363636364
                        },
                        "MyApi.Class.html#~Object": {
                          "ref": "MyApi.Class.html#~Object",
                          "tf": 14
                        },
                        "MyApi.html#~Object": {
                          "ref": "MyApi.html#~Object",
                          "tf": 14
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      },
                      "CustomError.html": {
                        "ref": "CustomError.html",
                        "tf": 23.333333333333332
                      },
                      "GlobalClass.html": {
                        "ref": "GlobalClass.html",
                        "tf": 11.666666666666666
                      },
                      "GlobalClass.html#testMethod": {
                        "ref": "GlobalClass.html#testMethod",
                        "tf": 12.727272727272728
                      }
                    },
                    "c": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "GlobalClass.html": {
                                  "ref": "GlobalClass.html",
                                  "tf": 1900
                                }
                              },
                              "#": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "GlobalClass.html#name": {
                                          "ref": "GlobalClass.html#name",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                },
                                "_": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "v": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "b": {
                                                        "docs": {
                                                          "GlobalClass.html#_privateMember": {
                                                            "ref": "GlobalClass.html#_privateMember",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "GlobalClass.html#testMethod": {
                                                        "ref": "GlobalClass.html#testMethod",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "GlobalClass.html": {
                      "ref": "GlobalClass.html",
                      "tf": 3.8461538461538463
                    },
                    "MyApi.Class.html": {
                      "ref": "MyApi.Class.html",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "MyApi.html": {
                    "ref": "MyApi.html",
                    "tf": 5.555555555555555
                  }
                },
                "n": {
                  "docs": {
                    "MyApi.utils.html#.format": {
                      "ref": "MyApi.utils.html#.format",
                      "tf": 10
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "y": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "x": {
                    "docs": {
                      "undefined": {
                        "tf": 23.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "CustomError.html": {
                      "ref": "CustomError.html",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "MyApi.html#.staticMember": {
                        "ref": "MyApi.html#.staticMember",
                        "tf": 23.333333333333332
                      }
                    },
                    "m": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "b": {
                            "docs": {
                              "MyApi.html#.staticMember": {
                                "ref": "MyApi.html#.staticMember",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {
                "MyApi.utils.html#.format": {
                  "ref": "MyApi.utils.html#.format",
                  "tf": 26.666666666666664
                }
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "GlobalClass.html#name": {
                        "ref": "GlobalClass.html#name",
                        "tf": 50
                      },
                      "GlobalClass.html#_privateMember": {
                        "ref": "GlobalClass.html#_privateMember",
                        "tf": 33.33333333333333
                      },
                      "MyApi.Class.html#publicMember": {
                        "ref": "MyApi.Class.html#publicMember",
                        "tf": 50
                      },
                      "MyApi.Class.html#protectedMember": {
                        "ref": "MyApi.Class.html#protectedMember",
                        "tf": 33.33333333333333
                      },
                      "MyApi.Class.html#_privateMember": {
                        "ref": "MyApi.Class.html#_privateMember",
                        "tf": 33.33333333333333
                      },
                      "MyApi.Child.html#protectedMember": {
                        "ref": "MyApi.Child.html#protectedMember",
                        "tf": 33.33333333333333
                      },
                      "MyApi.Child.html#publicMember": {
                        "ref": "MyApi.Child.html#publicMember",
                        "tf": 50
                      },
                      "MyApi.Child.html#_privateMember": {
                        "ref": "MyApi.Child.html#_privateMember",
                        "tf": 33.33333333333333
                      },
                      "MyApi.html#.staticMember": {
                        "ref": "MyApi.html#.staticMember",
                        "tf": 33.33333333333333
                      },
                      "MyApi.utils.html#.format": {
                        "ref": "MyApi.utils.html#.format",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "m": {
                "docs": {},
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "GlobalClass.html": {
                          "ref": "GlobalClass.html",
                          "tf": 11.666666666666666
                        },
                        "MyApi.Class.html": {
                          "ref": "MyApi.Class.html",
                          "tf": 11.666666666666666
                        },
                        "MyApi.Child.html": {
                          "ref": "MyApi.Child.html",
                          "tf": 11.666666666666666
                        },
                        "MyApi.html": {
                          "ref": "MyApi.html",
                          "tf": 17.5
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "MyApi.utils.html#.format": {
                        "ref": "MyApi.utils.html#.format",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "MyApi.Class.html#testMethod": {
                        "ref": "MyApi.Class.html#testMethod",
                        "tf": 8.333333333333332
                      },
                      "MyApi.Child.html#testMethod": {
                        "ref": "MyApi.Child.html#testMethod",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "a": {
            "docs": {},
            "r": {
              "docs": {
                "undefined": {
                  "tf": 985
                }
              }
            },
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "GlobalClass.html": {
                    "ref": "GlobalClass.html",
                    "tf": 3.8461538461538463
                  },
                  "MyApi.Class.html": {
                    "ref": "MyApi.Class.html",
                    "tf": 3.8461538461538463
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "CustomError.html": {
                      "ref": "CustomError.html",
                      "tf": 110
                    },
                    "GlobalClass.html": {
                      "ref": "GlobalClass.html",
                      "tf": 129.35897435897436
                    },
                    "GlobalClass.html#name": {
                      "ref": "GlobalClass.html#name",
                      "tf": 35
                    },
                    "GlobalClass.html#_privateMember": {
                      "ref": "GlobalClass.html#_privateMember",
                      "tf": 23.333333333333332
                    },
                    "GlobalClass.html#testMethod": {
                      "ref": "GlobalClass.html#testMethod",
                      "tf": 6.363636363636364
                    },
                    "MyApi.Class.html": {
                      "ref": "MyApi.Class.html",
                      "tf": 779.3589743589744
                    },
                    "MyApi.Class.html#publicMember": {
                      "ref": "MyApi.Class.html#publicMember",
                      "tf": 23.333333333333332
                    },
                    "MyApi.Class.html#protectedMember": {
                      "ref": "MyApi.Class.html#protectedMember",
                      "tf": 17.5
                    },
                    "MyApi.Class.html#_privateMember": {
                      "ref": "MyApi.Class.html#_privateMember",
                      "tf": 17.5
                    },
                    "MyApi.Class.html#testMethod": {
                      "ref": "MyApi.Class.html#testMethod",
                      "tf": 17.083333333333332
                    },
                    "MyApi.Class.html#anotherMethod": {
                      "ref": "MyApi.Class.html#anotherMethod",
                      "tf": 13.333333333333332
                    },
                    "MyApi.Class.html#~Object": {
                      "ref": "MyApi.Class.html#~Object",
                      "tf": 14
                    },
                    "MyApi.Child.html": {
                      "ref": "MyApi.Child.html",
                      "tf": 121.66666666666667
                    },
                    "MyApi.Child.html#protectedMember": {
                      "ref": "MyApi.Child.html#protectedMember",
                      "tf": 17.5
                    },
                    "MyApi.Child.html#publicMember": {
                      "ref": "MyApi.Child.html#publicMember",
                      "tf": 23.333333333333332
                    },
                    "MyApi.Child.html#_privateMember": {
                      "ref": "MyApi.Child.html#_privateMember",
                      "tf": 17.5
                    },
                    "MyApi.Child.html#anotherMethod": {
                      "ref": "MyApi.Child.html#anotherMethod",
                      "tf": 11.11111111111111
                    },
                    "MyApi.Child.html#testMethod": {
                      "ref": "MyApi.Child.html#testMethod",
                      "tf": 17.083333333333332
                    }
                  },
                  "#": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "b": {
                                        "docs": {
                                          "MyApi.Class.html#publicMember": {
                                            "ref": "MyApi.Class.html#publicMember",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "b": {
                                              "docs": {
                                                "MyApi.Class.html#protectedMember": {
                                                  "ref": "MyApi.Class.html#protectedMember",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "_": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "b": {
                                            "docs": {
                                              "MyApi.Class.html#_privateMember": {
                                                "ref": "MyApi.Class.html#_privateMember",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "h": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "d": {
                                        "docs": {
                                          "MyApi.Class.html#testMethod": {
                                            "ref": "MyApi.Class.html#testMethod",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "MyApi.Class.html#anotherMethod": {
                                                  "ref": "MyApi.Class.html#anotherMethod",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "~": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "b": {
                        "docs": {},
                        "j": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "MyApi.Class.html#~Object": {
                                    "ref": "MyApi.Class.html#~Object",
                                    "tf": 150
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "CustomError.html": {
                        "ref": "CustomError.html",
                        "tf": 23.333333333333332
                      }
                    },
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "CustomError.html": {
                                  "ref": "CustomError.html",
                                  "tf": 1900
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "GlobalClass.html#testMethod": {
                      "ref": "GlobalClass.html#testMethod",
                      "tf": 6.363636363636364
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {
                    "MyApi.Child.html": {
                      "ref": "MyApi.Child.html",
                      "tf": 661.6666666666666
                    },
                    "MyApi.Child.html#anotherMethod": {
                      "ref": "MyApi.Child.html#anotherMethod",
                      "tf": 7.777777777777778
                    },
                    "MyApi.utils.html": {
                      "ref": "MyApi.utils.html",
                      "tf": 23.333333333333332
                    }
                  },
                  "#": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "b": {
                                              "docs": {
                                                "MyApi.Child.html#protectedMember": {
                                                  "ref": "MyApi.Child.html#protectedMember",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "u": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "b": {
                                        "docs": {
                                          "MyApi.Child.html#publicMember": {
                                            "ref": "MyApi.Child.html#publicMember",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "_": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "b": {
                                            "docs": {
                                              "MyApi.Child.html#_privateMember": {
                                                "ref": "MyApi.Child.html#_privateMember",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "MyApi.Child.html#anotherMethod": {
                                                  "ref": "MyApi.Child.html#anotherMethod",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "h": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "d": {
                                        "docs": {
                                          "MyApi.Child.html#testMethod": {
                                            "ref": "MyApi.Child.html#testMethod",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {
                  "MyApi.html": {
                    "ref": "MyApi.html",
                    "tf": 5.555555555555555
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "MyApi.html": {
                          "ref": "MyApi.html",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "a": {
          "docs": {},
          "v": {
            "docs": {},
            "a": {
              "docs": {},
              "i": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_tutorial.html": {
                      "ref": "list_tutorial.html",
                      "tf": 35
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "MyApi.Class.html#anotherMethod": {
                      "ref": "MyApi.Class.html#anotherMethod",
                      "tf": 7.777777777777778
                    },
                    "MyApi.Child.html#anotherMethod": {
                      "ref": "MyApi.Child.html#anotherMethod",
                      "tf": 7.777777777777778
                    }
                  },
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "MyApi.Class.html#anotherMethod": {
                                      "ref": "MyApi.Class.html#anotherMethod",
                                      "tf": 620
                                    },
                                    "MyApi.Child.html#anotherMethod": {
                                      "ref": "MyApi.Child.html#anotherMethod",
                                      "tf": 620
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {
                    "MyApi.Class.html#anotherMethod": {
                      "ref": "MyApi.Class.html#anotherMethod",
                      "tf": 5.555555555555555
                    },
                    "MyApi.Child.html#anotherMethod": {
                      "ref": "MyApi.Child.html#anotherMethod",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "g": {
              "docs": {
                "MyApi.utils.html#.format": {
                  "ref": "MyApi.utils.html#.format",
                  "tf": 26.666666666666664
                }
              },
              "n": {
                "docs": {
                  "MyApi.utils.html#.format": {
                    "ref": "MyApi.utils.html#.format",
                    "tf": 16.666666666666664
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_tutorial.html": {
                    "ref": "list_tutorial.html",
                    "tf": 110
                  },
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_namespace.html": {
                    "ref": "list_namespace.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "i": {
                              "docs": {
                                "list_tutorial.html": {
                                  "ref": "list_tutorial.html",
                                  "tf": 1300
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "list_namespace.html": {
                                      "ref": "list_namespace.html",
                                      "tf": 1300
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "p": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "v": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "&": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "GlobalClass.html#_privateMember": {
                                      "ref": "GlobalClass.html#_privateMember",
                                      "tf": 33.33333333333333
                                    },
                                    "MyApi.Class.html#_privateMember": {
                                      "ref": "MyApi.Class.html#_privateMember",
                                      "tf": 33.33333333333333
                                    },
                                    "MyApi.Child.html#_privateMember": {
                                      "ref": "MyApi.Child.html#_privateMember",
                                      "tf": 33.33333333333333
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "o": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "&": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "MyApi.Class.html#protectedMember": {
                                          "ref": "MyApi.Class.html#protectedMember",
                                          "tf": 33.33333333333333
                                        },
                                        "MyApi.Child.html#protectedMember": {
                                          "ref": "MyApi.Child.html#protectedMember",
                                          "tf": 33.33333333333333
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "MyApi.html#.staticMember": {
                                    "ref": "MyApi.html#.staticMember",
                                    "tf": 33.33333333333333
                                  },
                                  "MyApi.utils.html#.format": {
                                    "ref": "MyApi.utils.html#.format",
                                    "tf": 16.666666666666664
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "MyApi.Class.html#anotherMethod": {
                        "ref": "MyApi.Class.html#anotherMethod",
                        "tf": 5.555555555555555
                      },
                      "MyApi.Child.html#anotherMethod": {
                        "ref": "MyApi.Child.html#anotherMethod",
                        "tf": 3.3333333333333335
                      },
                      "MyApi.html": {
                        "ref": "MyApi.html",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "GlobalClass.html#name": {
                    "ref": "GlobalClass.html#name",
                    "tf": 735
                  }
                },
                "s": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 635
                          },
                          "MyApi.html": {
                            "ref": "MyApi.html",
                            "tf": 133.05555555555554
                          },
                          "MyApi.html#.staticMember": {
                            "ref": "MyApi.html#.staticMember",
                            "tf": 23.333333333333332
                          },
                          "MyApi.html#~Object": {
                            "ref": "MyApi.html#~Object",
                            "tf": 14
                          },
                          "MyApi.utils.html": {
                            "ref": "MyApi.utils.html",
                            "tf": 133.33333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "CustomError.html": {
                      "ref": "CustomError.html",
                      "tf": 23.333333333333332
                    }
                  },
                  ".": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "y": {
                                  "docs": {},
                                  "p": {
                                    "docs": {
                                      "CustomError.html": {
                                        "ref": "CustomError.html",
                                        "tf": 3.8461538461538463
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "x": {
            "docs": {},
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "GlobalClass.html": {
                        "ref": "GlobalClass.html",
                        "tf": 3.8461538461538463
                      },
                      "MyApi.Class.html": {
                        "ref": "MyApi.Class.html",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "e": {
                "docs": {},
                "p": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "MyApi.Class.html#anotherMethod": {
                        "ref": "MyApi.Class.html#anotherMethod",
                        "tf": 5.555555555555555
                      },
                      "MyApi.Child.html#anotherMethod": {
                        "ref": "MyApi.Child.html#anotherMethod",
                        "tf": 3.3333333333333335
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "MyApi.Child.html#anotherMethod": {
                      "ref": "MyApi.Child.html#anotherMethod",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "b": {
            "docs": {},
            "j": {
              "docs": {
                "GlobalClass.html#testMethod": {
                  "ref": "GlobalClass.html#testMethod",
                  "tf": 20
                },
                "MyApi.Class.html#testMethod": {
                  "ref": "MyApi.Class.html#testMethod",
                  "tf": 20
                },
                "MyApi.Class.html#anotherMethod": {
                  "ref": "MyApi.Class.html#anotherMethod",
                  "tf": 20
                },
                "MyApi.Child.html#anotherMethod": {
                  "ref": "MyApi.Child.html#anotherMethod",
                  "tf": 20
                },
                "MyApi.Child.html#testMethod": {
                  "ref": "MyApi.Child.html#testMethod",
                  "tf": 20
                }
              },
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "CustomError.html": {
                        "ref": "CustomError.html",
                        "tf": 3.8461538461538463
                      },
                      "GlobalClass.html#testMethod": {
                        "ref": "GlobalClass.html#testMethod",
                        "tf": 20
                      },
                      "MyApi.Class.html#testMethod": {
                        "ref": "MyApi.Class.html#testMethod",
                        "tf": 20
                      },
                      "MyApi.Class.html#anotherMethod": {
                        "ref": "MyApi.Class.html#anotherMethod",
                        "tf": 20
                      },
                      "MyApi.Class.html#~Object": {
                        "ref": "MyApi.Class.html#~Object",
                        "tf": 600
                      },
                      "MyApi.Child.html#anotherMethod": {
                        "ref": "MyApi.Child.html#anotherMethod",
                        "tf": 20
                      },
                      "MyApi.Child.html#testMethod": {
                        "ref": "MyApi.Child.html#testMethod",
                        "tf": 20
                      },
                      "MyApi.html#~Object": {
                        "ref": "MyApi.html#~Object",
                        "tf": 600
                      }
                    }
                  }
                }
              },
              "n": {
                "docs": {
                  "GlobalClass.html#testMethod": {
                    "ref": "GlobalClass.html#testMethod",
                    "tf": 20
                  },
                  "MyApi.Class.html#testMethod": {
                    "ref": "MyApi.Class.html#testMethod",
                    "tf": 20
                  },
                  "MyApi.Class.html#anotherMethod": {
                    "ref": "MyApi.Class.html#anotherMethod",
                    "tf": 20
                  },
                  "MyApi.Child.html#anotherMethod": {
                    "ref": "MyApi.Child.html#anotherMethod",
                    "tf": 20
                  },
                  "MyApi.Child.html#testMethod": {
                    "ref": "MyApi.Child.html#testMethod",
                    "tf": 20
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "MyApi.Child.html#anotherMethod": {
                          "ref": "MyApi.Child.html#anotherMethod",
                          "tf": 3.3333333333333335
                        }
                      },
                      "d": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "n": {
                            "docs": {
                              "MyApi.Class.html#testMethod": {
                                "ref": "MyApi.Class.html#testMethod",
                                "tf": 8.333333333333332
                              },
                              "MyApi.Class.html#anotherMethod": {
                                "ref": "MyApi.Class.html#anotherMethod",
                                "tf": 5.555555555555555
                              },
                              "MyApi.Child.html#testMethod": {
                                "ref": "MyApi.Child.html#testMethod",
                                "tf": 8.333333333333332
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "MyApi.Child.html#anotherMethod": {
                "ref": "MyApi.Child.html#anotherMethod",
                "tf": 3.3333333333333335
              }
            }
          }
        },
        "m": {
          "docs": {},
          "a": {
            "docs": {},
            "r": {
              "docs": {},
              "k": {
                "docs": {},
                "d": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "w": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "GlobalClass.html": {
                            "ref": "GlobalClass.html",
                            "tf": 15.512820512820513
                          },
                          "GlobalClass.html#testMethod": {
                            "ref": "GlobalClass.html#testMethod",
                            "tf": 8.75
                          },
                          "MyApi.Class.html": {
                            "ref": "MyApi.Class.html",
                            "tf": 15.512820512820513
                          },
                          "MyApi.Class.html#testMethod": {
                            "ref": "MyApi.Class.html#testMethod",
                            "tf": 8.75
                          },
                          "MyApi.Class.html#anotherMethod": {
                            "ref": "MyApi.Class.html#anotherMethod",
                            "tf": 7.777777777777778
                          },
                          "MyApi.Child.html": {
                            "ref": "MyApi.Child.html",
                            "tf": 11.666666666666666
                          },
                          "MyApi.Child.html#anotherMethod": {
                            "ref": "MyApi.Child.html#anotherMethod",
                            "tf": 7.777777777777778
                          },
                          "MyApi.Child.html#testMethod": {
                            "ref": "MyApi.Child.html#testMethod",
                            "tf": 8.75
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "GlobalClass.html": {
                      "ref": "GlobalClass.html",
                      "tf": 3.8461538461538463
                    },
                    "MyApi.Class.html": {
                      "ref": "MyApi.Class.html",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "GlobalClass.html#name": {
                        "ref": "GlobalClass.html#name",
                        "tf": 110
                      },
                      "GlobalClass.html#_privateMember": {
                        "ref": "GlobalClass.html#_privateMember",
                        "tf": 133.33333333333334
                      },
                      "MyApi.Class.html#publicMember": {
                        "ref": "MyApi.Class.html#publicMember",
                        "tf": 133.33333333333334
                      },
                      "MyApi.Class.html#protectedMember": {
                        "ref": "MyApi.Class.html#protectedMember",
                        "tf": 127.5
                      },
                      "MyApi.Class.html#_privateMember": {
                        "ref": "MyApi.Class.html#_privateMember",
                        "tf": 127.5
                      },
                      "MyApi.Child.html#protectedMember": {
                        "ref": "MyApi.Child.html#protectedMember",
                        "tf": 127.5
                      },
                      "MyApi.Child.html#publicMember": {
                        "ref": "MyApi.Child.html#publicMember",
                        "tf": 133.33333333333334
                      },
                      "MyApi.Child.html#_privateMember": {
                        "ref": "MyApi.Child.html#_privateMember",
                        "tf": 127.5
                      },
                      "MyApi.html#.staticMember": {
                        "ref": "MyApi.html#.staticMember",
                        "tf": 133.33333333333334
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "GlobalClass.html#testMethod": {
                        "ref": "GlobalClass.html#testMethod",
                        "tf": 6.363636363636364
                      },
                      "MyApi.Class.html#testMethod": {
                        "ref": "MyApi.Class.html#testMethod",
                        "tf": 17.083333333333332
                      },
                      "MyApi.Class.html#anotherMethod": {
                        "ref": "MyApi.Class.html#anotherMethod",
                        "tf": 13.333333333333332
                      },
                      "MyApi.Child.html#anotherMethod": {
                        "ref": "MyApi.Child.html#anotherMethod",
                        "tf": 11.11111111111111
                      },
                      "MyApi.Child.html#testMethod": {
                        "ref": "MyApi.Child.html#testMethod",
                        "tf": 17.083333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "GlobalClass.html": {
                    "ref": "GlobalClass.html",
                    "tf": 3.8461538461538463
                  },
                  "MyApi.Class.html": {
                    "ref": "MyApi.Class.html",
                    "tf": 3.8461538461538463
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "a": {
              "docs": {},
              "p": {
                "docs": {},
                "i": {
                  "docs": {
                    "MyApi.Class.html": {
                      "ref": "MyApi.Class.html",
                      "tf": 11.666666666666666
                    },
                    "MyApi.Class.html#testMethod": {
                      "ref": "MyApi.Class.html#testMethod",
                      "tf": 8.75
                    },
                    "MyApi.Class.html#anotherMethod": {
                      "ref": "MyApi.Class.html#anotherMethod",
                      "tf": 7.777777777777778
                    },
                    "MyApi.Child.html": {
                      "ref": "MyApi.Child.html",
                      "tf": 11.666666666666666
                    },
                    "MyApi.Child.html#anotherMethod": {
                      "ref": "MyApi.Child.html#anotherMethod",
                      "tf": 7.777777777777778
                    },
                    "MyApi.Child.html#testMethod": {
                      "ref": "MyApi.Child.html#testMethod",
                      "tf": 8.75
                    },
                    "MyApi.html": {
                      "ref": "MyApi.html",
                      "tf": 1917.5
                    },
                    "MyApi.html#~Object": {
                      "ref": "MyApi.html#~Object",
                      "tf": 14
                    }
                  },
                  ".": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "MyApi.Class.html": {
                                  "ref": "MyApi.Class.html",
                                  "tf": 1250
                                },
                                "MyApi.Class.html#~Object": {
                                  "ref": "MyApi.Class.html#~Object",
                                  "tf": 14
                                }
                              },
                              "#": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "b": {
                                                    "docs": {
                                                      "MyApi.Class.html#publicMember": {
                                                        "ref": "MyApi.Class.html#publicMember",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "b": {
                                                          "docs": {
                                                            "MyApi.Class.html#protectedMember": {
                                                              "ref": "MyApi.Class.html#protectedMember",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "_": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "v": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "b": {
                                                        "docs": {
                                                          "MyApi.Class.html#_privateMember": {
                                                            "ref": "MyApi.Class.html#_privateMember",
                                                            "tf": 1100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "MyApi.Class.html#testMethod": {
                                                        "ref": "MyApi.Class.html#testMethod",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {
                                                            "MyApi.Class.html#anotherMethod": {
                                                              "ref": "MyApi.Class.html#anotherMethod",
                                                              "tf": 1100
                                                            },
                                                            "MyApi.Child.html#anotherMethod": {
                                                              "ref": "MyApi.Child.html#anotherMethod",
                                                              "tf": 3.3333333333333335
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "~": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "b": {
                                    "docs": {},
                                    "j": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "MyApi.Class.html#~Object": {
                                                "ref": "MyApi.Class.html#~Object",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "h": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "d": {
                              "docs": {
                                "MyApi.Class.html#testMethod": {
                                  "ref": "MyApi.Class.html#testMethod",
                                  "tf": 8.333333333333332
                                },
                                "MyApi.Class.html#anotherMethod": {
                                  "ref": "MyApi.Class.html#anotherMethod",
                                  "tf": 5.555555555555555
                                },
                                "MyApi.Child.html": {
                                  "ref": "MyApi.Child.html",
                                  "tf": 1250
                                },
                                "MyApi.Child.html#testMethod": {
                                  "ref": "MyApi.Child.html#testMethod",
                                  "tf": 8.333333333333332
                                }
                              },
                              "#": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "b": {
                                                          "docs": {
                                                            "MyApi.Child.html#protectedMember": {
                                                              "ref": "MyApi.Child.html#protectedMember",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "u": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "b": {
                                                    "docs": {
                                                      "MyApi.Child.html#publicMember": {
                                                        "ref": "MyApi.Child.html#publicMember",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "_": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "v": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "b": {
                                                        "docs": {
                                                          "MyApi.Child.html#_privateMember": {
                                                            "ref": "MyApi.Child.html#_privateMember",
                                                            "tf": 1100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {
                                                            "MyApi.Child.html#anotherMethod": {
                                                              "ref": "MyApi.Child.html#anotherMethod",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "MyApi.Child.html#testMethod": {
                                                        "ref": "MyApi.Child.html#testMethod",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "b": {
                                        "docs": {
                                          "MyApi.html#.staticMember": {
                                            "ref": "MyApi.html#.staticMember",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "u": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "MyApi.utils.html": {
                                "ref": "MyApi.utils.html",
                                "tf": 1250
                              }
                            },
                            "s": {
                              "docs": {},
                              ".": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "MyApi.utils.html#.format": {
                                                "ref": "MyApi.utils.html#.format",
                                                "tf": 1100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "~": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "b": {
                        "docs": {},
                        "j": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "MyApi.html#~Object": {
                                    "ref": "MyApi.html#~Object",
                                    "tf": 1300
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {
              "GlobalClass.html": {
                "ref": "GlobalClass.html",
                "tf": 3.8461538461538463
              },
              "MyApi.Class.html": {
                "ref": "MyApi.Class.html",
                "tf": 3.8461538461538463
              }
            }
          },
          "p": {
            "docs": {},
            "d": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "MyApi.Child.html#anotherMethod": {
                      "ref": "MyApi.Child.html#anotherMethod",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {
                  "MyApi.utils.html": {
                    "ref": "MyApi.utils.html",
                    "tf": 650
                  }
                },
                "s": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "MyApi.utils.html#.format": {
                                    "ref": "MyApi.utils.html#.format",
                                    "tf": 100
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "_": {
          "docs": {},
          "p": {
            "docs": {},
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "v": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "b": {
                                "docs": {
                                  "GlobalClass.html#_privateMember": {
                                    "ref": "GlobalClass.html#_privateMember",
                                    "tf": 683.3333333333334
                                  },
                                  "MyApi.Class.html#_privateMember": {
                                    "ref": "MyApi.Class.html#_privateMember",
                                    "tf": 633.3333333333334
                                  },
                                  "MyApi.Child.html#_privateMember": {
                                    "ref": "MyApi.Child.html#_privateMember",
                                    "tf": 633.3333333333334
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "r": {
            "docs": {},
            "i": {
              "docs": {},
              "v": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "GlobalClass.html#_privateMember": {
                        "ref": "GlobalClass.html#_privateMember",
                        "tf": 23.333333333333332
                      },
                      "MyApi.Class.html#_privateMember": {
                        "ref": "MyApi.Class.html#_privateMember",
                        "tf": 17.5
                      },
                      "MyApi.Child.html#_privateMember": {
                        "ref": "MyApi.Child.html#_privateMember",
                        "tf": 17.5
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "MyApi.Class.html#protectedMember": {
                          "ref": "MyApi.Class.html#protectedMember",
                          "tf": 17.5
                        },
                        "MyApi.Child.html#protectedMember": {
                          "ref": "MyApi.Child.html#protectedMember",
                          "tf": 17.5
                        }
                      },
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "b": {
                                  "docs": {
                                    "MyApi.Class.html#protectedMember": {
                                      "ref": "MyApi.Class.html#protectedMember",
                                      "tf": 633.3333333333334
                                    },
                                    "MyApi.Child.html#protectedMember": {
                                      "ref": "MyApi.Child.html#protectedMember",
                                      "tf": 633.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "b": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "b": {
                            "docs": {
                              "MyApi.Class.html#publicMember": {
                                "ref": "MyApi.Class.html#publicMember",
                                "tf": 650
                              },
                              "MyApi.Child.html#publicMember": {
                                "ref": "MyApi.Child.html#publicMember",
                                "tf": 650
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "u": {
                "docs": {
                  "GlobalClass.html#testMethod": {
                    "ref": "GlobalClass.html#testMethod",
                    "tf": 20
                  },
                  "MyApi.Class.html#testMethod": {
                    "ref": "MyApi.Class.html#testMethod",
                    "tf": 20
                  },
                  "MyApi.Class.html#anotherMethod": {
                    "ref": "MyApi.Class.html#anotherMethod",
                    "tf": 20
                  },
                  "MyApi.Child.html#anotherMethod": {
                    "ref": "MyApi.Child.html#anotherMethod",
                    "tf": 20
                  },
                  "MyApi.Child.html#testMethod": {
                    "ref": "MyApi.Child.html#testMethod",
                    "tf": 20
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "i": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "MyApi.html": {
                        "ref": "MyApi.html",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 314
    },
    "corpusTokens": [
      "_privatememb",
      "anoth",
      "anothermethod",
      "appli",
      "arg",
      "argn",
      "avail",
      "base",
      "better",
      "bootstrap",
      "brush",
      "car",
      "case",
      "check",
      "child",
      "child#_privatememb",
      "child#anothermethod",
      "child#protectedmemb",
      "child#publicmemb",
      "child#testmethod",
      "class",
      "class#_privatememb",
      "class#anothermethod",
      "class#protectedmemb",
      "class#publicmemb",
      "class#testmethod",
      "class~object",
      "code",
      "contain",
      "custom",
      "customerror",
      "definit",
      "depth",
      "descript",
      "document",
      "drive",
      "dummi",
      "error",
      "error.prototyp",
      "event",
      "except",
      "explan",
      "fenc",
      "file",
      "fix",
      "foodoc",
      "format",
      "function",
      "gener",
      "give",
      "given",
      "global",
      "globalclass",
      "globalclass#_privatememb",
      "globalclass#nam",
      "globalclass#testmethod",
      "handlebar",
      "highlight",
      "i'm",
      "idea",
      "implement",
      "index",
      "inherit",
      "instanc",
      "it'",
      "jsdoc3",
      "list",
      "list:class",
      "list:namespac",
      "list:tutori",
      "longer",
      "lt;private&gt",
      "lt;protected&gt",
      "lt;static&gt",
      "markdown",
      "meant",
      "member",
      "method",
      "more",
      "myapi",
      "myapi.child",
      "myapi.child#_privatememb",
      "myapi.child#anothermethod",
      "myapi.child#protectedmemb",
      "myapi.child#publicmemb",
      "myapi.child#testmethod",
      "myapi.class",
      "myapi.class#_privatememb",
      "myapi.class#anothermethod",
      "myapi.class#protectedmemb",
      "myapi.class#publicmemb",
      "myapi.class#testmethod",
      "myapi.class~object",
      "myapi.staticmemb",
      "myapi.util",
      "myapi.utils.format",
      "myapi~object",
      "name",
      "namespac",
      "obj",
      "object",
      "objn",
      "on",
      "overrid",
      "overridden",
      "privat",
      "protect",
      "protectedmemb",
      "publicmemb",
      "rais",
      "readm",
      "reflect",
      "remov",
      "replac",
      "simpli",
      "stack",
      "static",
      "staticmemb",
      "str",
      "string",
      "summari",
      "suppli",
      "syntax",
      "teeth",
      "templat",
      "test",
      "testmethod",
      "trace",
      "tutori",
      "type",
      "typedef",
      "updat",
      "us",
      "util",
      "utils.format",
      "valu",
      "within"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "FooDoc",
      "longname": "index",
      "name": "FooDoc",
      "tags": "index",
      "summary": "A Bootstrap and Handlebars based template for JSDoc3.",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "undefined": {
      "kind": "tutorial",
      "title": "Drive Car",
      "longname": "drive-car",
      "name": "drive-car",
      "tags": "drive-car",
      "summary": "How to drive a car!",
      "description": "",
      "body": ""
    },
    "list_tutorial.html": {
      "id": "list_tutorial.html",
      "kind": "list",
      "title": "Tutorials",
      "longname": "list:tutorial",
      "name": "Tutorials",
      "tags": "list:tutorial",
      "summary": "All available tutorials.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_namespace.html": {
      "id": "list_namespace.html",
      "kind": "list",
      "title": "Namespaces",
      "longname": "list:namespace",
      "name": "Namespaces",
      "tags": "list:namespace",
      "summary": "All documented namespaces.",
      "description": "",
      "body": ""
    },
    "CustomError.html": {
      "id": "CustomError.html",
      "kind": "class",
      "title": "CustomError",
      "longname": "CustomError",
      "name": "CustomError",
      "tags": "CustomError",
      "summary": "A global custom error.",
      "description": "As this is just a test file there is no implementation of inheriting the Error.prototype or fixing of the stack trace, this is a dummy dummy object to test the documentation.",
      "body": ""
    },
    "GlobalClass.html": {
      "id": "GlobalClass.html",
      "kind": "class",
      "title": "GlobalClass",
      "longname": "GlobalClass",
      "name": "GlobalClass",
      "tags": "GlobalClass",
      "summary": "This is the summary of the global test class, test markdown.",
      "description": "This is the description for the class this is meant to be a more in depth explanation of what this class does and it's general use case, test markdown",
      "body": ""
    },
    "GlobalClass.html#name": {
      "id": "GlobalClass.html#name",
      "kind": "member",
      "title": "name :string",
      "longname": "GlobalClass#name",
      "name": "name",
      "tags": "GlobalClass#name name",
      "summary": "The name of the class.",
      "description": ""
    },
    "GlobalClass.html#_privateMember": {
      "id": "GlobalClass.html#_privateMember",
      "kind": "member",
      "title": "&lt;private&gt; _privateMember :string",
      "longname": "GlobalClass#_privateMember",
      "name": "_privateMember",
      "tags": "GlobalClass#_privateMember _privateMember",
      "summary": "A private member of the class.",
      "description": ""
    },
    "GlobalClass.html#testMethod": {
      "id": "GlobalClass.html#testMethod",
      "kind": "function",
      "title": "testMethod( type )",
      "longname": "GlobalClass#testMethod",
      "name": "testMethod",
      "tags": "GlobalClass#testMethod testMethod",
      "summary": "This is a test instance method of the global test class to check that global type definitions are documented.",
      "description": ""
    },
    "MyApi.Class.html": {
      "id": "MyApi.Class.html",
      "kind": "class",
      "title": "MyApi.Class",
      "longname": "MyApi.Class",
      "name": "Class",
      "tags": "MyApi.Class Class",
      "summary": "This is the summary of the MyApi test class, test markdown.",
      "description": "This is the description for the class this is meant to be a more in depth explanation of what this class does and it's general use case, test markdown",
      "body": ""
    },
    "MyApi.Class.html#publicMember": {
      "id": "MyApi.Class.html#publicMember",
      "kind": "member",
      "title": "publicMember :string",
      "longname": "MyApi.Class#publicMember",
      "name": "publicMember",
      "tags": "MyApi.Class#publicMember Class#publicMember publicMember",
      "summary": "I'm a member of the class.",
      "description": ""
    },
    "MyApi.Class.html#protectedMember": {
      "id": "MyApi.Class.html#protectedMember",
      "kind": "member",
      "title": "&lt;protected&gt; protectedMember :string",
      "longname": "MyApi.Class#protectedMember",
      "name": "protectedMember",
      "tags": "MyApi.Class#protectedMember Class#protectedMember protectedMember",
      "summary": "I'm a protected member of the class.",
      "description": ""
    },
    "MyApi.Class.html#_privateMember": {
      "id": "MyApi.Class.html#_privateMember",
      "kind": "member",
      "title": "&lt;private&gt; _privateMember :string",
      "longname": "MyApi.Class#_privateMember",
      "name": "_privateMember",
      "tags": "MyApi.Class#_privateMember Class#_privateMember _privateMember",
      "summary": "I'm a private member of the class.",
      "description": ""
    },
    "MyApi.Class.html#testMethod": {
      "id": "MyApi.Class.html#testMethod",
      "kind": "function",
      "title": "testMethod( value, obj [, ...objN ] ) ??? {Object}",
      "longname": "MyApi.Class#testMethod",
      "name": "testMethod",
      "tags": "MyApi.Class#testMethod Class#testMethod testMethod",
      "summary": "This is a test instance method of the MyApi test class, test markdown.",
      "description": "This method is not overridden in the MyApi.Child class but is simply inherited."
    },
    "MyApi.Class.html#anotherMethod": {
      "id": "MyApi.Class.html#anotherMethod",
      "kind": "function",
      "title": "anotherMethod( value, obj [, ...objN ] ) ??? {Object}",
      "longname": "MyApi.Class#anotherMethod",
      "name": "anotherMethod",
      "tags": "MyApi.Class#anotherMethod Class#anotherMethod anotherMethod",
      "summary": "This is a another test instance method of the MyApi test class, test markdown.",
      "description": "This method is overridden in the MyApi.Child class and should remove the exception documentation as it no longer applies."
    },
    "MyApi.Class.html#~Object": {
      "id": "MyApi.Class.html#~Object",
      "kind": "typedef",
      "title": "Object",
      "longname": "MyApi.Class~Object",
      "name": "Object",
      "tags": "MyApi.Class~Object Class~Object",
      "summary": "This is a test type definition on the MyApi.Class class.",
      "description": ""
    },
    "MyApi.Child.html": {
      "id": "MyApi.Child.html",
      "kind": "class",
      "title": "MyApi.Child",
      "longname": "MyApi.Child",
      "name": "Child",
      "tags": "MyApi.Child Child",
      "summary": "This is the summary of the MyApi child class, test markdown.",
      "description": "",
      "body": ""
    },
    "MyApi.Child.html#protectedMember": {
      "id": "MyApi.Child.html#protectedMember",
      "kind": "member",
      "title": "&lt;protected&gt; protectedMember :string",
      "longname": "MyApi.Child#protectedMember",
      "name": "protectedMember",
      "tags": "MyApi.Child#protectedMember Child#protectedMember protectedMember",
      "summary": "I'm a protected member of the class.",
      "description": ""
    },
    "MyApi.Child.html#publicMember": {
      "id": "MyApi.Child.html#publicMember",
      "kind": "member",
      "title": "publicMember :string",
      "longname": "MyApi.Child#publicMember",
      "name": "publicMember",
      "tags": "MyApi.Child#publicMember Child#publicMember publicMember",
      "summary": "I'm a member of the class.",
      "description": ""
    },
    "MyApi.Child.html#_privateMember": {
      "id": "MyApi.Child.html#_privateMember",
      "kind": "member",
      "title": "&lt;private&gt; _privateMember :string",
      "longname": "MyApi.Child#_privateMember",
      "name": "_privateMember",
      "tags": "MyApi.Child#_privateMember Child#_privateMember _privateMember",
      "summary": "I'm a private member of the class.",
      "description": ""
    },
    "MyApi.Child.html#anotherMethod": {
      "id": "MyApi.Child.html#anotherMethod",
      "kind": "function",
      "title": "anotherMethod( value, obj [, ...objN ] ) ??? {Object}",
      "longname": "MyApi.Child#anotherMethod",
      "name": "anotherMethod",
      "tags": "MyApi.Child#anotherMethod Child#anotherMethod anotherMethod",
      "summary": "This is a another test instance method of the MyApi child class, test markdown.",
      "description": "This method overrides the MyApi.Class#anotherMethod and should remove the exception documentation as it no longer applies. The event should also be updated to reflect it is raised by this class and not the inherited one."
    },
    "MyApi.Child.html#testMethod": {
      "id": "MyApi.Child.html#testMethod",
      "kind": "function",
      "title": "testMethod( value, obj [, ...objN ] ) ??? {Object}",
      "longname": "MyApi.Child#testMethod",
      "name": "testMethod",
      "tags": "MyApi.Child#testMethod Child#testMethod testMethod",
      "summary": "This is a test instance method of the MyApi test class, test markdown.",
      "description": "This method is not overridden in the MyApi.Child class but is simply inherited."
    },
    "MyApi.html": {
      "id": "MyApi.html",
      "kind": "namespace",
      "title": "MyApi",
      "longname": "MyApi",
      "name": "MyApi",
      "tags": "MyApi",
      "summary": "This is the test summary for the MyApi namespace.",
      "description": "This is the longer description for the namespace giving a better idea about the code contained within it.",
      "body": ""
    },
    "MyApi.html#.staticMember": {
      "id": "MyApi.html#.staticMember",
      "kind": "member",
      "title": "&lt;static&gt; staticMember :string",
      "longname": "MyApi.staticMember",
      "name": "staticMember",
      "tags": "MyApi.staticMember staticMember",
      "summary": "This is a static member of the namespace.",
      "description": ""
    },
    "MyApi.html#~Object": {
      "id": "MyApi.html#~Object",
      "kind": "typedef",
      "title": "Object",
      "longname": "MyApi~Object",
      "name": "Object",
      "tags": "MyApi~Object",
      "summary": "This is a test type definition on the MyApi namespace.",
      "description": ""
    },
    "MyApi.utils.html": {
      "id": "MyApi.utils.html",
      "kind": "namespace",
      "title": "MyApi.utils",
      "longname": "MyApi.utils",
      "name": "utils",
      "tags": "MyApi.utils utils",
      "summary": "This is to test child namespaces.",
      "description": "",
      "body": ""
    },
    "MyApi.utils.html#.format": {
      "id": "MyApi.utils.html#.format",
      "kind": "function",
      "title": "&lt;static&gt; format( str, arg [, ...argN ] ) ??? {string}",
      "longname": "MyApi.utils.format",
      "name": "format",
      "tags": "MyApi.utils.format utils.format format",
      "summary": "Formats the supplied str with the given replacement args and there indexes.",
      "description": ""
    }
  }
};