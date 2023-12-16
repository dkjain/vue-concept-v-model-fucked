import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    elem: {
      innerText: "I am an element",
    },
    slideList: {
      slide1: {
        uid: 1688826056829,
        zones: [
          {
            canvasElementType: "photo",
            caption: {
              canvasElementType: "text",
              styles: {
                backgroundColor: "#761D1D",
                border: {
                  colors: "#F11F6D",
                  radiusBottomLeft: "10px",
                  radiusBottomRight: "10px",
                  radiusTopLeft: "10px",
                  radiusTopRight: "10px",
                  style: "dashed",
                  width: "5px",
                },
                boxShadow: {
                  blur: "9px",
                  colors: "#140202",
                  x: "13px",
                  y: "-1px",
                },
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
                height: 129,
                left: 35,
                letterSpacing: "7px",
                objectFitClassName: "object-fit-fill",
                padding: {
                  bottom: "13px",
                  left: "13px",
                  right: "13px",
                  top: "13px",
                },
                textAlign: "center",
                textTransform: "uppercase",
                top: 404,
                width: 298,
                wordSpacing: "67px",
              },
              text: "Before",
              uid: "lju3fhr5mjcmtdza0q",
            },
            childZoneId: 0,
            imgData: {
              size: 72413,
              id: 5,
              name: "marvel-captain-amercia.jpg",
              type: "image/jpeg",
              imageStyles: {},
              previewElement: {},
              DZfile: {
                size: 72413,
                name: "marvel-captain-amercia.jpg",
                type: "image/jpeg",
                width: 100,
                height: 100,
                id: 5,
                imageStyles: {},
                childZoneId: 0,
                manuallyAdded: true,
                previewElement: {},
                previewTemplate: {},
              },
              isZoneImageLoaded: true,
            },
            styles: {
              color: "#D53535",
              height: 262,
              left: 399,
              letterSpacing: "17px",
              objectFitClassName: "object-fit-fill",
              textTransform: "uppercase",
              top: 344,
              width: 257,
              wordSpacing: "216px",
            },
            uid: "lju3fhdwtgchh9m94mc",
          },
          {
            canvasElementType: "photo",
            caption: {
              canvasElementType: "text",
              styles: {
                height: 52,
                left: 56,
                objectFitClassName: "object-fit-fill",
                top: 275,
                width: 213,
              },
              text: "After",
              uid: "lju3fhwrlq3c7s5uur",
            },
            childZoneId: 1,
            imgData: {
              size: 222327,
              id: 3,
              name: "marvel-dredd-thumb.jpg",
              type: "image/jpeg",
              imageStyles: {},
              previewElement: {},
              DZfile: {
                size: 222327,
                name: "marvel-dredd-thumb.jpg",
                type: "image/jpeg",
                width: 100,
                height: 100,
                id: 3,
                imageStyles: {},
                childZoneId: 1,
                manuallyAdded: true,
                previewElement: {},
                previewTemplate: {},
              },
              isZoneImageLoaded: true,
            },
            styles: {
              width: 290,
              height: 275,
              top: 209,
              left: 849,
              fontStyle: "italic",
              padding: {
                left: "78px",
                right: "78px",
                top: "78px",
                bottom: "78px",
              },
              margin: {},
              border: {
                width: "8px",
                style: "double",
                colors: "#DC5D5D",
                radiusTopLeft: "5px",
                radiusTopRight: "5px",
                radiusBottomLeft: "5px",
                radiusBottomRight: "5px",
              },
              boxShadow: null,
              textShadow: null,
              textTransform: "lowercase",
              objectFitClassName: "object-fit-fill",
            },
            uid: "lju3fhe9zcqbr9vkbjg",
          },
        ],
        headings: [
          {
            canvasElementType: "text",
            styles: {
              height: 150,
              left: 140,
              objectFitClassName: "object-fit-fill",
              top: 53,
              width: 200,
            },
            title: "New Text",
            uid: "lju3fhdcyal5musoi3",
          },
        ],
        styles: {
          objectFitClassName: "object-fit-fill",
        },
        duration: 5000,
        slideArrowStyles: {},
        AllWidgets: {
          ZIndexes: {},
        },
        imageWidgetContainer: {
          isCustom: false,
        },
        zoneContainerStyles: {},
      },
      slide2: {
        uid: 1688826087287,
        zones: [
          {
            canvasElementType: "photo",
            caption: {
              canvasElementType: "text",
              styles: {
                height: 50,
                left: 112,
                top: 100,
                width: 215,
              },
              text: "Before",
              uid: "lju3g529f14x5qaaxiu",
            },
            childZoneId: 0,
            imgData: {
              size: 8746,
              id: 6,
              name: "pretty-woman-thumb.jpg",
              type: "image/jpeg",
              imageStyles: {},
              previewElement: {},
              DZfile: {
                size: 8746,
                name: "pretty-woman-thumb.jpg",
                type: "image/jpeg",
                width: 100,
                height: 100,
                id: 6,
                imageStyles: {},
                childZoneId: 0,
                manuallyAdded: true,
                previewElement: {},
                previewTemplate: {},
              },
              isZoneImageLoaded: true,
            },
            styles: {
              height: 374,
              left: 239,
              objectFitClassName: "object-fit-fill",
              top: 412,
              width: 330,
            },
            uid: "lju3g4vxbnueu00afc6",
          },
          {
            canvasElementType: "photo",
            caption: {
              canvasElementType: "text",
              styles: {
                height: 50,
                left: 112,
                top: 100,
                width: 215,
              },
              text: "Before",
              uid: "lju3g54k3bcp9lir7la",
            },
            childZoneId: 1,
            imgData: {
              size: 8746,
              id: 6,
              name: "pretty-woman-thumb.jpg",
              type: "image/jpeg",
              imageStyles: {},
              previewElement: {},
              DZfile: {
                size: 8746,
                name: "pretty-woman-thumb.jpg",
                type: "image/jpeg",
                width: 100,
                height: 100,
                id: 6,
                imageStyles: {},
                childZoneId: 1,
                manuallyAdded: true,
                previewElement: {},
                previewTemplate: {},
              },
              isZoneImageLoaded: true,
            },
            styles: {
              height: 380,
              left: 1283,
              objectFitClassName: "object-fit-fill",
              top: 431,
              width: 312,
            },
            uid: "lju3g4w2xlrvxxoan5p",
          },
        ],
        headings: [
          {
            canvasElementType: "text",
            styles: {
              height: 150,
              left: 200,
              objectFitClassName: "object-fit-fill",
              top: 150,
              width: 200,
            },
            title: "Slide 2",
            uid: "lju3g4vpcucd3xzekbu",
          },
        ],
        styles: {
          objectFitClassName: "object-fit-fill",
        },
        duration: 5000,
        slideArrowStyles: {},
        AllWidgets: {
          ZIndexes: {},
        },
        imageWidgetContainer: {
          isCustom: false,
        },
        zoneContainerStyles: {},
      },
      slide3: {
        uid: 1688826131928,
        zones: [
          {
            canvasElementType: "photo",
            caption: {
              canvasElementType: "text",
              styles: {
                height: 50,
                left: 112,
                top: 100,
                width: 215,
              },
              text: "Before",
              uid: "lju3h3jreis1lf7ki1w",
            },
            childZoneId: 0,
            imgData: {
              size: 8746,
              id: 6,
              name: "pretty-woman-thumb.jpg",
              type: "image/jpeg",
              imageStyles: {},
              previewElement: {},
              DZfile: {
                size: 8746,
                name: "pretty-woman-thumb.jpg",
                type: "image/jpeg",
                width: 100,
                height: 100,
                id: 6,
                imageStyles: {},
                childZoneId: 0,
                manuallyAdded: true,
                previewElement: {},
                previewTemplate: {},
              },
              isZoneImageLoaded: true,
            },
            styles: {
              height: 425,
              left: 138,
              objectFitClassName: "object-fit-fill",
              top: 284,
              width: 409,
            },
            uid: "lju3h3bdtgkhy9wnu6l",
          },
          {
            canvasElementType: "photo",
            caption: {
              canvasElementType: "text",
              styles: {
                height: 50,
                left: 112,
                top: 100,
                width: 215,
              },
              text: "Before",
              uid: "lju3h3nlnjpockxuzod",
            },
            childZoneId: 1,
            imgData: {
              size: 8746,
              id: 6,
              name: "pretty-woman-thumb.jpg",
              type: "image/jpeg",
              imageStyles: {},
              previewElement: {},
              DZfile: {
                size: 8746,
                name: "pretty-woman-thumb.jpg",
                type: "image/jpeg",
                width: 100,
                height: 100,
                id: 6,
                imageStyles: {},
                childZoneId: 1,
                manuallyAdded: true,
                previewElement: {},
                previewTemplate: {},
              },
              isZoneImageLoaded: true,
            },
            styles: {
              height: 308,
              left: 1225,
              objectFitClassName: "object-fit-fill",
              top: 506,
              width: 345,
            },
            uid: "lju3h3bhlwimde0nsf",
          },
        ],
        headings: [
          {
            canvasElementType: "text",
            styles: {
              height: 272,
              left: 733,
              objectFitClassName: "object-fit-fill",
              top: 167,
              width: 700,
            },
            title: "New Text",
            uid: "lju3h3b6kucobunzv5",
          },
        ],
        styles: {
          objectFitClassName: "object-fit-fill",
        },
        duration: 5000,
        slideArrowStyles: {},
        AllWidgets: {
          ZIndexes: {},
        },
        imageWidgetContainer: {
          isCustom: false,
        },
        zoneContainerStyles: {},
      },
    },
  },
  // Getter is used in component's computed property
  // computed are used as listeners to get change
  // in state.
  getters: {
    increment(state) {
      return state.counter * 4;
    },
    elem(state) {
      return state.elem;
    },
  },
  //Setters these are, mutates the store's (app's)
  //state. Mutations are committed by components. i.e.
  // this.$store.commit('myMutationThatChangesState')
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
    decrement(state) {
      state.counter--;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
  },
});
