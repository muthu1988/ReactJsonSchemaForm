export const schema = {
    title: "Form",
    type: "object",
    required: ["name"],
    properties: {
      name: {type: "string", title: "Name", default: "Enter your name"},
      parentDrop: {type: "string",title: "ODD/EVEN", enum:[], enumNames:[] },
      childDrop: {type: "string",title: "Choose a Number", enum:[], enumNames:[] },
      multiselect: {type: "array",title: "Multi Select Number", items : { type:"string", enum:[], enumNames:[]} },
      submitted: {type: "string"},
      done: {type: "boolean", title: "Done?", default: false}
    }
};
export const uiSchema =  {
  "ui:disabled": true,
  "ui:autofocus": true
};
export const lookUps = {
  parentDropEnum: {
      enum: ['odd','even'],
      enumNames: ['ODD','EVEN']
  },
  oddEnum: {
      enum: ['1','3','5'],
      enumNames: ['ONE','THREE','FIVE']
  },
  evenEnum: {
      enum: ['2','4','6'],
      enumNames: ['TWO','FOUR','SIX']
  },
  multiselect: {
    enum: ['1','2','3','4','5','6','7','8','9','10','11'],
    enumNames: ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN']
  }
};

export const updateJson = function(object, value, updateValue) {
  for (var x in object) {
    if (typeof object[x] === 'object') {
      updateJson(object[x], value);
    }
    if(x === value) {
      console.log(x);
      console.log(object[x]);
      object[x] = Object.assign({}, object[x], updateJson(object[x]));
    }
  }
}
