const { errorMessage, dataSuccess} = require('../../util');
const { query } = require('../../db');
const JWT = require('jsonwebtoken');

const {PUB_KEY} = process.env;

module.exports = () => ({
  /**
   * Get All
   */
  getAll: async(req,res) => {
    try{
      const q = "SELECT * FROM challenge_student ORDER BY student_created";
      const users = await query(q);
      return res.status(200).send(dataSuccess(users.rows));
    }catch(err){
      return res.status(200).send(errorMessage(err.message));
    }
  },

  /**
   * Get By Id
   */
  get: async(req,res) => {
    try{
      const uuid = req.params.id;
      const q = "SELECT * FROM challenge_student WHERE student_uuid = $1";
      const users = await query(q, [uuid]);
      return res.status(200).send(dataSuccess(users.rows));
    }catch(err){
      return res.status(200).send(errorMessage(err.message));
    }    
  },

  /**
   * Try to save new Student
   */
  save: async(req,res) => {
    try{
      const body = req.body;
      if(body && body.student_name && body.student_email && body.student_ra && body.student_cpf){
        const q = "INSERT INTO challenge_student (student_name,student_email,student_ra,student_cpf) VALUES ($1,$2,$3,$4) RETURNING *";
        const student = await query(q, [
          body.student_name,
          body.student_email,
          body.student_ra,
          body.student_cpf
        ]);

        return res.status(200).send(dataSuccess(student.rows));
      }
      return res.status(200).send(errorMessage('Required fields are blank'));
    }catch(err){
      return res.status(200).send(errorMessage(err.message));
    }
  },

  /**
   * Try update student
   */
  update: async(req,res) => {
    try{
      const body = req.body;
      if(body && body.student_name && body.student_email && body.student_uuid){
        const q = "UPDATE challenge_student SET student_name=$1,student_email=$2 WHERE student_uuid=$3 RETURNING *";
        const student = await query(q, [
          body.student_name,
          body.student_email,
          body.student_uuid
        ]);

        return res.status(200).send(dataSuccess(student.rows));
      }
      return res.status(200).send(errorMessage('Required fields are blank'));
    }catch(err){
      return res.status(200).send(errorMessage(err.message));
    }
  },

  /**
   * Try delete student
   */
  delete: async(req,res) => {
    try{
      const student_uuid = req.params.id;
      if(student_uuid){
        // query delete mentionend in: https://stackoverflow.com/a/22546994/704099
        const q = "WITH deleted AS (DELETE FROM challenge_student WHERE student_uuid=$1 RETURNING *) SELECT count(*) FROM deleted"
        const student = await query(q, [student_uuid]);
        return res.status(200).send(dataSuccess(student.rows));
      }
    }catch(err){
      return res.status(200).send(errorMessage(err.message));
    }
  }
})