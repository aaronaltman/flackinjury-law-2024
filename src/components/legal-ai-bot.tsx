"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function LegalAIBot() {
  const [question, setQuestion] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true); // Start loading

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ legal_text: question }), // Use question state directly
    };

    try {
      const response = await fetch(
        "https://pythonconnect1-7eab29aefd0a.herokuapp.com/lawsummary/law_summary/",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        setSummary(data.response);
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false); // Stop loading
    }

    setQuestion(""); // Clear the question input
  };

  return (
    <>
      <p>Legal AI Tool</p>

      <p>
        Ask a legal question or input some complicated legal text and get it
        back summarized. This tool is for demonstration purposes only. Please
        consult a lawyer for legal advice. Answers may be wrong/incorrect. The
        response will appear below the chat box.
      </p>

      <Textarea
        id="chat-box"
        placeholder="Ask a legal question or paste legal text to have it summarized"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={10}
      />

      <Button
        type="submit"
        variant="outline"
        color="secondary"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Loading..." : "Send Question"}
      </Button>

      {summary && <p>Summary: {summary}</p>}
    </>
  );
}
