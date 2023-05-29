const _ = require("lodash");
const videoUtils = {
  handleNext: ({
    currentlySelected,
    selectedContentIndex,
    currentModuleWithIndex,
    type,
    entireContent,
  }) => {
    const { module, content } = currentlySelected;
    const { currentModule, currentModuleIndex } = currentModuleWithIndex;
    const currentModuleContents = currentModule.modules.contents;

    // combination of module id + content id
    const moduleContentId = module._id + content._id;
    // find the next video
    let foundNextVideo = null;
    for (let index = 0; index < currentModuleContents.length; index++) {
      // break for loop if selectedContentIndex +1 is equals to the length of the modules
      console.log(selectedContentIndex + 1);
      console.log(currentModule.modules.contents.length);
      if (selectedContentIndex + 1 === currentModule.modules.contents.length)
        break;

      const element = currentModuleContents[index];
      const { access, description, duration, title, _id } =
        currentModule.modules;

      // combination of module id + content id
      const moduleContentIdInside = currentModule.modules._id + element._id;
      if (moduleContentIdInside === moduleContentId) {
        let selectIndex = index;
        selectIndex++;
        const content = currentModuleContents[selectIndex];
        const obj = {
          module: { access, description, duration, title, _id },
          content,
        };
        foundNextVideo = obj;
      }
    }

    console.log("FoundNextVideo: ", foundNextVideo);
    if (foundNextVideo) return foundNextVideo;

    // // if video not found then this
    let currentModuleIndexWhenNotFound = _.cloneDeep(currentModuleIndex);
    const anotherModuleIndex = currentModuleIndexWhenNotFound + 1;
    console.log("another module index: ", anotherModuleIndex);
    const anotherModule = entireContent[anotherModuleIndex];
    console.log("Here another module: ", anotherModule);
    if (anotherModule) {
      const returningVideoIndex = 0;
      const { access, description, duration, title, _id } =
        anotherModule.modules;
      console.log("returningVideoIndex: ", returningVideoIndex);
      return {
        content: anotherModule.modules.contents[returningVideoIndex],
        module: { access, description, duration, title, _id },
      };
    } else {
      return currentlySelected;
    }
  },
  handlePrevious: ({
    currentlySelected,
    selectedContentIndex,
    currentModuleWithIndex,
    type,
    entireContent,
  }) => {
    const { module, content } = currentlySelected;
    const { currentModule, currentModuleIndex } = currentModuleWithIndex;
    const currentModuleContents = currentModule.modules.contents;

    // combination of module id + content id
    const moduleContentId = module._id + content._id;
    // find the next video
    let foundNextVideo = null;
    for (let index = 0; index < currentModuleContents.length; index++) {
      // break for loop if selectedContentIndex +1 is equals to the length of the modules
      console.log(selectedContentIndex + 1);
      console.log(currentModule.modules.contents.length);
      if (selectedContentIndex === 0) break;

      const element = currentModuleContents[index];
      const { access, description, duration, title, _id } =
        currentModule.modules;

      // combination of module id + content id
      const moduleContentIdInside = currentModule.modules._id + element._id;
      if (moduleContentIdInside === moduleContentId) {
        let selectIndex = index;
        selectIndex--;
        // }
        const content = currentModuleContents[selectIndex];
        const obj = {
          module: { access, description, duration, title, _id },
          content,
        };
        foundNextVideo = obj;
      }
    }

    console.log("FoundNextVideo: ", foundNextVideo);
    if (foundNextVideo) return foundNextVideo;

    // // if video not found then this
    let currentModuleIndexWhenNotFound = _.cloneDeep(currentModuleIndex);
    const anotherModuleIndex = currentModuleIndexWhenNotFound - 1;
    console.log("another module index: ", anotherModuleIndex);
    const anotherModule = entireContent[anotherModuleIndex];
    console.log("Here another module: ", anotherModule);
    if (anotherModule) {
      const returningVideoIndex = anotherModule.modules.contents.length - 1;
      const { access, description, duration, title, _id } =
        anotherModule.modules;
      console.log("returningVideoIndex: ", returningVideoIndex);
      return {
        content: anotherModule.modules.contents[returningVideoIndex],
        module: { access, description, duration, title, _id },
      };
    } else {
      return currentlySelected;
    }
  },
};

module.exports = videoUtils;
