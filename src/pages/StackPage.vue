<template>
  <q-page class="column q-pa-md">
    <div class="q-mb-xl">
      <h1 class="text-h4 text-primary q-mb-md">{{ $t('stack.pageTitle') }}</h1>
      <p class="text-body1">
        {{ $t('stack.introduction') }}
      </p>
    </div>

    <!-- Render cards dynamically from the skillCards array -->
    <q-card v-for="(card, index) in skillCards" :key="card.id" :class="index < skillCards.length - 1 ? 'q-mb-lg' : ''">
      <q-card-section>
        <h2 class="text-h6 text-bold">{{ card.title }}</h2>
        <ul>
          <li v-for="skill in card.skills" :key="skill.id">
            <div>
              <strong>{{ skill.name }}</strong> – {{ skill.description }}
            </div>
            <!-- Render subskills if present -->
            <ul v-if="skill.subSkills && skill.subSkills.length > 0" class="q-pl-md">
              <li v-for="subskill in skill.subSkills" :key="subskill.id">
                <strong>{{ subskill.name }}</strong> – {{ subskill.description }}
              </li>
            </ul>
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import messagesSource from 'src/i18n';
import type { MessageLanguages } from 'src/boot/i18n';

// Define component setup
const { locale } = useI18n({ useScope: 'global' });

// Types for skills
interface Subskill {
  id: string;
  name: string;
  description: string;
}

interface Skill {
  id: string;
  name: string;
  description: string;
  subSkills?: Subskill[];
}

interface SkillCard {
  id: string;
  title: string;
  skills: Skill[];
}

// Use the translation's skillCards array directly
const skillCards = computed<SkillCard[]>(() => {
  const currentLocale = locale.value as MessageLanguages;
  if (Array.isArray(messagesSource[currentLocale].stack.skillCards))
    return messagesSource[currentLocale].stack.skillCards as SkillCard[];
  return [];
});
</script>

<style scoped>
.stack-page {
  background: #f8fafc;
  color: #23272f;
  min-height: 100vh;
}

.body--dark .stack-page {
  background: #23272f;
  color: #e3f2fd;
}

.q-card {
  background: #fff;
  color: #23272f;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 1.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
}

.body--dark .q-card {
  background: #23272f;
  color: #e3f2fd;
  box-shadow: 0 2px 8px rgba(144, 202, 249, 0.08);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #1976d2;
  font-weight: 600;
  margin-bottom: 0.5em;
}

.body--dark h1,
.body--dark h2,
.body--dark h3,
.body--dark h4,
.body--dark h5,
.body--dark h6 {
  color: #90caf9;
}

ul {
  padding-left: 1.1em;
}

li {
  margin-bottom: 0.4em;
  line-height: 1.5;
}

strong {
  color: #1976d2;
}

.body--dark strong {
  color: #90caf9;
}

@media (max-width: 700px) {
  .q-card {
    margin-bottom: 1.2rem;
    border-radius: 8px;
  }

  .stack-page {
    padding-bottom: 16px;
  }
}
</style>
