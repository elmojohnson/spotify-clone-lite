import { useState } from "react";
import { User } from "../../types";

const useUser = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const getUser = async () => {
    try {
        
    } catch (error) {
        
    }
  }

  return {};
};

export default useUser;
