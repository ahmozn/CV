<script setup>
import Summary from '../sections/Summary/Summary.vue';
import Education from '../sections/Education.vue'
import JobExperience from '../sections/JobExperience.vue'
import ForeignLanguage from '../sections/ForeignLanguage.vue'
import ExamsResults from '../sections/ExamsResults.vue'
import TechnicalSkills from '../sections/TechnicalSkills.vue'
import Projects from '../sections/Projects.vue'


</script>

<template>
    <div class="grid gap-6">
        <Summary />
        <Education />
        <JobExperience />
        <ForeignLanguage />
        <ExamsResults />
        <TechnicalSkills />
        <Projects />
    </div>
</template>