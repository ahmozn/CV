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
        <Summary id="summary"/>
        <Education id="education"/>
        <JobExperience id="jobExperience"/>
        <ForeignLanguage id="foreignLanguage"/>
        <ExamsResults id="examsResults"/>
        <TechnicalSkills id="technicalSkills"/>
        <Projects id="projects"/>
    </div>
</template>