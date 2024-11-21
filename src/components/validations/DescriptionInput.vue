<script>
export function descriptionInput(description) {
  const trimmedDescription = description.trim();
  if (trimmedDescription.length <= 0 || trimmedDescription.length > 1000) {
    return {
      valid: false,
      errorValue: "A descrição deve ter no mínimo 1 caractere e no máximo 1000 caracteres.",
    };
  }
  return { valid: true, errorValue: "" };
}

</script>