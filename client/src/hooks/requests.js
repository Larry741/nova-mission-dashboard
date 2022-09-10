const Url = 'v1';

async function httpGetPlanets() {
  try {
    const response =  await fetch(`${Url}/planets`);
  
    if (!response.ok) {
      throw new Error("couldn't load planets");
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function httpGetLaunches() {
  try {
    const response = await fetch(`${Url}/launches`);
  
    if (!response.ok) {
      throw new Error("couldn't load launches");
    }
    const fetchedResponse = await response.json();
  
    return fetchedResponse.sort((a, b) => {
      return a.flightNumber - b.flightNumber;
    });
  } catch (err) {
    console.log(err);
    return []
  }
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${Url}/launches`, {
      method: 'post',
      body: JSON.stringify(launch),
      headers: {
        'Content-Type': "application/json"
      }
    });
  } catch(error) {
    return {
      ok: false
    }
  }
}

async function httpAbortLaunch(id) {
  try {
    const response = await fetch(`${Url}/launches/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    return {
      ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};