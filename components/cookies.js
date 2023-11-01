import setCookie from 'set-cookie-parser';

const saveCookies = async (cookies) => {
    try {
      await AsyncStorage.setItem('cookies', JSON.stringify(cookies));
      console.log('Cookies saved successfully.');
    } catch (error) {
      console.error('Error saving cookies:', error);
    }
  }


  // Retrieving cookies
  const retrieveCookies = async () => {
    try {
      const cookiesString = await AsyncStorage.getItem('cookies');
      const cookies = JSON.parse(cookiesString);
      return cookies;
    } catch (error) {
      console.error('Error retrieving cookies:', error);
      return null;
    }
  }
  const makeFetchParams = (data) => {
    const cookies = retrieveCookies // SecureStore or AsyncStorage
    const c_arr = cookies.map(d => { return d.name+'='+d.value; });
    const cookieStr = c_arr.join(';');
    return {
        method: 'GET',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'cookie': cookieStr
        },
        body: data
    };
};



if(response.status==200) {
    // Navigate to Home screen
  let cookies, cookieHeader, serverData;
      cookieHeader = setCookie.splitCookiesString(response.headers.get('set-cookie'));
      cookies = setCookie.parse(cookieHeader);
      console.log(cookies); // array
      // Save cookies array to SecureStore or AsyncStorage
      saveCookies(cookies);

    const protectedResponse = await fetch('http://192.168.0.188:5000/protected');

    const protectedData = await protectedResponse.json();

    console.log('Protected Response:', protectedResponse);
    console.log('Protected Data:', protectedData);

    if (protectedResponse.status === 200) {
      navigation.navigate('Home');
    }
  } else {
    setPopupMessage('Login Failed');
    setIsModalVisible(true);
  }