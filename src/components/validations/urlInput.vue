<script>
export function UrlInput(url) {
  const trimmedUrl = url.trim();
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;

  if (!trimmedUrl) {
    return {
      valid: false,
      errorValue: "Não há algum link fornecido",
    };
  }

  if (!urlRegex.test(trimmedUrl)) {
    return {
      valid: false,
      errorValue: "O link fornecido não é uma URL válida.",
    };
  }

  return { valid: true, errorValue: "" };
}

</script>