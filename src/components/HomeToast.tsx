"use client";

import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function HomeToast() {
  const loginToast = !!useSearchParams().get("login") || false;
  const signUpToast = !!useSearchParams().get("signUp") || false;
  const newNoteToast = !!useSearchParams().get("newNote") || false;
  const logOutToast = !!useSearchParams().get("logOut") || false;
  const { toast } = useToast();

  const removeUrlParam = (param: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(param);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
  };

  useEffect(() => {
    if (loginToast) {
      toast({
        title: "Logged in",
        description: "You have been successfully logged in",
        variant: "success",
      });

      removeUrlParam("login");
    }

    if (signUpToast) {
      toast({
        title: "Signed up",
        description: "Check your email for a confirmation link",
        variant: "success",
      });

      removeUrlParam("signUp");
    }

    if (newNoteToast) {
      toast({
        title: "New Note",
        description: "You have successfully created a new note",
        variant: "success",
      });

      removeUrlParam("newNote");
    }

    if (logOutToast) {
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
        variant: "success",
      });

      removeUrlParam("logOut");
    }
  }, [loginToast, signUpToast, newNoteToast, logOutToast, toast]);

  return null;
}

export default HomeToast;
