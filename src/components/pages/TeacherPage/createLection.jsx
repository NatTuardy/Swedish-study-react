import React, { useState, useEffect } from "react";
import FormComponent from "../../common/form";
import {
  TextField,
  AriaField,
  CheckBoxField,
  GroupFields,
} from "../../common/form";
import SmallTitle from "../../common/typografy/smallTitle";

const CreateLection = () => {
  const [value, setValue] = useState({});
  const [data, setData] = useState({
    nameOfLection: "",
    descriptionOfLection: "",
    englishTranslate: false,
    ukrainianTranslate: false,
    words: [],
    text: [],
    sentences: [],
    //sections: [],
  });

  // {
  //   section: {
  //     id: "1",
  //     words: [],
  //   }
  // }

  const arraySections = [
    {
      sectionId: "arrayIndex +1",
      words: [
        {
          wordId: 123,
          swedish: "ett jobb",
          russian: "работа",
          english: "job",
          ukrainian: "робота",
          sound: "mp3",
        },
      ],
    },
    {
      sectionId: "arrayIndex +1",
      sentences: [
        {
          sentenceId: 124,
          swedish: "ett jobb",
          russian: "работа",
          english: "job",
          ukrainian: "робота",
          sound: "mp3",
        },
      ],
    },
  ];
  const objectSections = {
    words: [
      {
        sectionId: "arrayIndex +1",
        wordId: 123,
        swedish: "ett jobb",
        russian: "работа",
        english: "job",
        ukrainian: "робота",
        sound: "mp3",
      },
    ],
    sentences: [],
    rules: [],
    texts: [],
  };
  const handleSelectChange = ({ target }) => {
    setValue(target.value);
  };
  // useEffect(() => {
  //   const rules = "rules"
  //   const words = "words"
  //   const sentences = "sentences"
  //   const text = "text"

  //   if(value){
  //     for (let i = 0; i < 9; i++) {
  //       // str = str + i;
  //       array.push(words)
  //     }

  //   }
  //   // console.log(value)
  //   // console.log(array)

  // }, [value])

  const handleSubmit = (data) => {
    console.log(data);
  };
  const validatorConfig = {
    nameOfLection: {
      isRequired: {
        message: "Название лекции обязательно для заполнения",
      },
    },

    descriptionOfLection: {
      isRequired: {
        message: "Введите описание лекции",
      },
    },
  };
  return (
    <>
      <SmallTitle>createLection</SmallTitle>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 shadow p-4">
            <FormComponent
              onSubmit={handleSubmit}
              validatorConfig={validatorConfig}
              defaultData={data}
            >
              <TextField
                label="Name of Lection"
                name="nameOfLection"
                placeholder="add name for lection"
              />
              <AriaField
                label="Description of lection"
                name="descriptionOfLection"
                placeholder="add description for lection"
              />
              <CheckBoxField name="englishTranslate">
                Add english translate
              </CheckBoxField>
              <CheckBoxField name="ukrainianTranslate">
                Add ukrainian translate
              </CheckBoxField>
              {/* {value && console.log("hello value")} */}
              <GroupFields name="words" />
              <div className="mb-3">
                {/* {value &&
                  array.map((word, i) => (
                    <input label={word} name={word + i} key={i} />
                  ))} */}
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="validationCustom04"
                  name="sections"
                  value={value || ""}
                  onChange={handleSelectChange}
                >
                  <option value="">Add section</option>
                  <option value="rule" key="rule">
                    Rule
                  </option>
                  <option value="words" key="words">
                    Words
                  </option>
                  <option value="sentences" key="sentences">
                    Sentences
                  </option>
                  <option value="text" key="text">
                    Text
                  </option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </FormComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLection;
