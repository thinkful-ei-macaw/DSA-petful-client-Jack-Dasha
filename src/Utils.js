import config from './config';

function deleteDog() {
  fetch(`${config.API_ENDPOINT}/api/pets/dogs`, {
    method: 'DELETE',
  });
}

function deleteCat() {
  fetch(`${config.API_ENDPOINT}/api/pets/cats`, {
    method: 'DELETE',
  });
}

function deletePerson() {
  fetch(`${config.API_ENDPOINT}/api/people`, {
    method: 'DELETE',
  });
}

function queueRandomPerson() {
  fetch(`${config.API_ENDPOINT}/api/people`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: `Test Person ${Math.floor(Math.random() * 100)}`,
    }),
  });
}

function demoRandomAdoption() {
  let n = Math.floor(Math.random() * 2);
  if (n === 1) {
    deleteCat();
  } else {
    deleteDog();
  }
}

export default {
  deleteDog,
  deleteCat,
  deletePerson,
  queueRandomPerson,
  demoRandomAdoption,
};
