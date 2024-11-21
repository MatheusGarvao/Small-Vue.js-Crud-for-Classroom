<script>
export function TitleInput(title) {
  const trimmedTitle = title.trim();
  if (trimmedTitle.length <= 0 || trimmedTitle.length > 100) {
    return {
      valid: false,
      errorValue: "O título deve ter no mínimo 1 caractere e no máximo 100 caracteres",
    };
  }
  return { valid: true, errorValue: "" };
}

</script>