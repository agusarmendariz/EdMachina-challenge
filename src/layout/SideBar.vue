<script setup>


</script>


<template>
    <div class="side-content">
      
            <ul class="navigation-left">
                        <router-link
                            to="../views/Dashboard.vue"
                            tag="li"
                            class="nav-item"
                        >
                            <div class="nav-item-hold">
                                <i class="i-Bar-Chart text-3xl"></i>
                                <p>Dashboard</p>
                            </div>
                        </router-link>
                        <router-link
                            to="../views/SmartEnroller.vue"
                            tag="li"
                            class="nav-item"
                        >
                            <div class="nav-item-hold">
                                <i class="i-Wallet text-3xl"></i>
                                <p>Smart Enroller</p>
                            </div>
                        </router-link>
                        <router-link
                            to="../views/DropoutShield.vue"
                            tag="li"
                            class="nav-item"
                        >
                            <div class="nav-item-hold">
                                <i class="i-Find-User text-3xl"></i>
                                <p>Dropout Shield</p>
                            </div>
                        </router-link>
                        <router-link to="../views/RetentionPartner.vue" tag="li" class="nav-item">
                            <div class="nav-item-hold">
                                <i class="i-Checked-User text-3xl"></i>
                                <p>Retention Partner</p>
                            </div>
                        </router-link>
                        <router-link to="../views/AcademicOffer.vue" tag="li" class="nav-item">
                            <div class="nav-item-hold">
                                <i class="i-Checked-User text-3xl"></i>
                                <p>Academic Offer</p>
                            </div>
                        </router-link>
                        <router-link to="../views/MyReports.vue" tag="li" class="nav-item">
                            <div class="nav-item-hold">
                                <i class="i-Checked-User text-3xl"></i>
                                <p>My Reports</p>
                            </div>
                        </router-link>
                        <router-link to="../views/Workflows.vue" tag="li" class="nav-item">
                            <div class="nav-item-hold">
                                <i class="i-Checked-User text-3xl"></i>
                                <p>Workflows</p>
                            </div>
                        </router-link>

                    </ul>
        </div>
        
   
</template>