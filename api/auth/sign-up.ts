export const signUp = async (body: any): Promise<any> => {
  try {
    const response = await fetch(`http://192.168.1.111:5000/auth/sign-up`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    console.log("response: ", response);

    if (!response.ok) {
      throw new Error(`${await response.text()}`);
    }

    return response.json();
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};
