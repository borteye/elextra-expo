export const signIn = async (body: any): Promise<any> => {
  try {
    const response = await fetch(`http://192.168.1.112:5000/auth/sign-in`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`${await response.text()}`);
    }

    return response.json();
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};
