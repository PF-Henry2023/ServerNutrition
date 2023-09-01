const { Nutritionist } = require("../db");

const getHorarioTrabajoCombinado = async () => {
  try {
    const nutricionistasDesdeBD = await Nutritionist.findAll({
      where: { isActive: true },
    });

    const horarioCombinado = {
      diasDeTrabajoCombinados: [],
      horarioDeTrabajo: {},
    };

    const conjuntoDiasUnicos = new Set();

    for (let i = 0; i < nutricionistasDesdeBD.length; i++) {
      const nutricionistaJSON = nutricionistasDesdeBD[i].toJSON();
      const diasDeTrabajo = nutricionistaJSON.diasDeTrabajo;

      for (const dia of diasDeTrabajo) {
        conjuntoDiasUnicos.add(dia);
        const horarioTrabajoArr = nutricionistaJSON.horarioDeTrabajo[dia];

        if (!horarioCombinado.horarioDeTrabajo[dia]) {
          horarioCombinado.horarioDeTrabajo[dia] = [];
        }

        horarioCombinado.horarioDeTrabajo[dia] =
          horarioCombinado.horarioDeTrabajo[dia].concat(horarioTrabajoArr);
      }
    }

    horarioCombinado.diasDeTrabajoCombinados = Array.from(conjuntoDiasUnicos);

    return horarioCombinado;
  } catch (error) {
    return new Error(error);
  }
};

const calcularPuntosNutricionista = () => {};
const getDoc = (data) => {
  return data[0];
};
module.exports = {
  getHorarioTrabajoCombinado,
  calcularPuntosNutricionista,
  getDoc,
};
