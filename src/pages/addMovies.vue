  <template>
  <div>
    <CardForm @card-added="addCard" />
  </div>
</template>

<script setup>
import CardForm from "../components/cardForm.vue"
import { ref } from "vue"

const cards = ref(JSON.parse(localStorage.getItem("films")) || [])

const addCard = (card) => {
  card.id = cards.value != '' ? cards.value[cards.value.length-1].id + 1 : 0
  cards.value.push(card)
  localStorage.setItem("films", JSON.stringify(cards.value))
}
</script>
