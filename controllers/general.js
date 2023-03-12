//const createResponse = require('../../response');


//**************************** get expected Diseases *************************************** */
module.exports.getDiseases = async function (req, res) {
    try {
        console.log("hiii");
        if (!req.body.symptoms || req.body.symptoms == '' || req.body.symptoms.length<=1) {
            return res.status(400).send({
              status: false,
              message: 'Atleast two symptoms are required'
            });
          }
          const allDiseases = {};
          allDiseases['Thyroid']=new Set(['weight gain','constipation','fatigue','goiter','hair loss']);
          allDiseases['Pelvic Inflammatory Disease (PID)']=new Set(['abdominal pain','tenderness','heavy vaginal discharge','painful urination','fever','nausea']);
          allDiseases['Diabetes']=new Set(['increased thirst','increased urination','weight loss','fatigue','blurred vision','slow healing of wounds']);
          allDiseases['Depression']=new Set(['persistent sadness','lack of interest in activities','fatigue','irritability','insomnia','difficulty concentrating']);
          allDiseases['Asthma']=new Set(['wheezing','shortness of breath','coughing','chest tightness']);
          allDiseases['Migraine']=new Set(['nausea','vomiting','sensitivity to light and sound']);

          const symptoms=req.body.symptoms;
          const diseasesKeySet = Object.keys(allDiseases);
          let diseaseWithSymptomsList=[];
         console.log(diseaseWithSymptomsList);

          for(let i=0;i<diseasesKeySet.length;i++){
              let count=0;
              for(let j=0;j<symptoms.length;j++){
                if(allDiseases[diseasesKeySet[i]].has(symptoms[j])){
                    count++;
                }
              }
              if(count>=2){
                diseaseWithSymptomsList.push(diseasesKeySet[i]);
              }
          }
          return res.status(200).send({
            status: true,
            Diseases: diseaseWithSymptomsList
          })

    } catch (error) {
      console.log(error)
      return res.status(500).send({
        status: false,
        message: 'Sorry! some error ocurred'
      });
    }
  };
  