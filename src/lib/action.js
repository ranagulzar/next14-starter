
export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
    //   await signIn("credentials", { username, password });
    console.log(username,' ',password);
    } catch (err) {
      console.log(err);
  
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };
  