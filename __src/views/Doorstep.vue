<template>
    <div>
        <div class="dark:bg-brand-black-1 text-brand-black-4 dark:text-white">
            <!-- Header -->
            <section class="max-w-7xl mx-auto md:px-16 pt-4">
                <div
                    class="header-box md:flex md:items-center md:justify-between mb-10 py-20 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-green-1 text-white"
                >
                    <div class="flex-1 mb-8 md:mb-0 md:text-left text-center">
                        <div class="md:ml-16 md:pr-6">
                            <h2
                                class="mb-4 text-2xl md:text-3xl lg:text-5xl font-semibold font-playfair"
                            >Doorstep</h2>
                            <p class="text-lg md:text-xl lg:text-3xl font-light">Logistics</p>
                        </div>
                    </div>
                    <div class="flex-1">
                        <img src="../assets/doorstep-home.png" alt="Doorstep home photo" />
                    </div>
                </div>
            </section>
            <!-- End of Header -->
            <section class="max-w-7xl mx-auto py-20 px-16">
                <div class="max-w-5xl mx-auto md:px-16">
                    <h1
                        class="mb-4 lg:mb-7 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                    >Doorstep Logistics</h1>
                    <p
                        class="mb-14 md:text-lg lg:text-xl"
                    >The fastest way to ship your packages and parcels around the world</p>
                    <div
                        class="mb-14 md:w-10/12 pl-6 border-l-4 border-brand-black-4 text-xl md:text-2xl lg:text-4xl font-bold leading-normal lg:leading-normal"
                    >Doorstep is a solution that helps to simplify logistics and shipping services to ensure quick delivery of packages in a simplified processes</div>
                    <p
                        class="md:w-4/5 lg:w-5/6 md:text-lg lg:text-xl md:leading-8"
                    >Sending of documents and parcels have been in high demand as a result of expanding businesses and inter country trading. It gets to solve this by its provision of an integration sync with the tracking ID of the platform to constantly keep you in the loop.</p>
                </div>
            </section>
            <section class="max-w-7xl mx-auto pt-20 px-4 md:px-16">
                <div class="hidden md:flex items-center justify-between space-x-12">
                    <div class="flex-1">
                        <h2
                            class="mb-6 text-3xl lg:text-4xl font-bold font-playfair"
                        >Project responsibilities</h2>
                        <p>During the course of this project i was incharge of the ux and ui process which occasionally involved stakeholder interviews and surveys</p>
                    </div>
                    <div class="flex-1">
                        <img class="w-full" src="../assets/project-photo.png" alt="Project" />
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="block md:hidden">
                    <div class="mb-10">
                        <img class="w-full" src="../assets/project-photo.png" alt="Project" />
                    </div>
                    <div class="text-sm">
                        <h2 class="mb-6 text-2xl font-bold font-playfair">Project responsibilities</h2>
                        <p>During the course of this project i was incharge of the ux and ui process which occasionally involved stakeholder interviews and surveys</p>
                    </div>
                </div>
                <!-- End of mobile version -->
            </section>
            <!-- <section class="max-w-7xl mx-auto py-20 px-16">
                <div class="grid md:grid-cols-2 gap-10">
                    <template v-for="(project, index) in projects" :key="index">
                        <ProjectResponsibilities 
                        :iconUrl="project.iconUrl" 
                        :title="project.title" 
                        :text="project.text"
                        :items="project.items"
                        :tickUrl="project.tickUrl"
                        :class="project.bgColor"
                        />
                    </template>
                </div>
            </section>-->
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
                <div class="grid md:grid-cols-2 gap-10 text-sm md:text-base">
                    <div
                        class="p-10 bg-brand-gray-light-1 dark:bg-brand-black-5 shadow-sm rounded-md"
                    >
                        <div class="mb-8">
                            <img
                                class="p-4 bg-brand-purple-1 rounded-2xl"
                                src="../assets/discover-icon.png"
                                alt="Discover"
                            />
                        </div>
                        <h3
                            class="mb-3 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                        >Discover</h3>
                        <p
                            class="mb-6"
                        >Discovery was the first phase in the UX-design process that involved</p>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-purple-1 rounded-full"
                                    src="../assets/tick-purple.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Design strategy</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-purple-1 rounded-full"
                                    src="../assets/tick-purple.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Stakeholder interview</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-purple-1 rounded-full"
                                    src="../assets/tick-purple.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Market strategy</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-purple-1 rounded-full"
                                    src="../assets/tick-purple.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Competitor analysis</p>
                        </div>
                    </div>
                    <div
                        class="p-10 bg-brand-gray-light-1 dark:bg-brand-black-5 shadow-sm rounded-md"
                    >
                        <div class="mb-8">
                            <img
                                class="p-4 bg-brand-blue-2 rounded-2xl"
                                src="../assets/define-icon.png"
                                alt="Discover"
                            />
                        </div>
                        <h3
                            class="mb-3 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                        >Define</h3>
                        <p
                            class="mb-6"
                        >Defining a product is a phase in the UX-design process that involves</p>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-blue-2 rounded-full"
                                    src="../assets/tick-blue.png"
                                    alt="tick"
                                />
                            </div>
                            <p>User Research</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-blue-2 rounded-full"
                                    src="../assets/tick-blue.png"
                                    alt="tick"
                                />
                            </div>
                            <p>User personas</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-blue-2 rounded-full"
                                    src="../assets/tick-blue.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Data Gathering</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-blue-2 rounded-full"
                                    src="../assets/tick-blue.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Empathy mapping</p>
                        </div>
                    </div>
                    <div
                        class="p-10 bg-brand-gray-light-1 dark:bg-brand-black-5 shadow-sm rounded-md"
                    >
                        <div class="mb-8">
                            <img
                                class="p-4 bg-brand-orange-2 rounded-2xl"
                                src="../assets/ideate-icon.png"
                                alt="Ideate"
                            />
                        </div>
                        <h4
                            class="mb-3 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                        >Ideate</h4>
                        <p
                            class="mb-6"
                        >This part of the design process was where the product structure to shape</p>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-orange-2 rounded-full"
                                    src="../assets/tick-yellow.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Brainstorming</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-orange-2 rounded-full"
                                    src="../assets/tick-yellow.png"
                                    alt="tick"
                                />
                            </div>
                            <p>User flow</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-orange-2 rounded-full"
                                    src="../assets/tick-yellow.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Information architecture</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-orange-2 rounded-full"
                                    src="../assets/tick-yellow.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Card sorting</p>
                        </div>
                    </div>
                    <div
                        class="p-10 bg-brand-gray-light-1 dark:bg-brand-black-5 shadow-sm rounded-md"
                    >
                        <div class="mb-8">
                            <img
                                class="p-4 bg-brand-red-1 rounded-2xl"
                                src="../assets/visual-icon.png"
                                alt="Visual"
                            />
                        </div>
                        <h4
                            class="mb-3 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                        >Visual Design</h4>
                        <p
                            class="mb-6"
                        >The research and structuring was brought to life visually to solve the problem</p>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-red-1 rounded-full"
                                    src="../assets/tick-red.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Wireframe</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-red-1 rounded-full"
                                    src="../assets/tick-red.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Style guide generation</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-red-1 rounded-full"
                                    src="../assets/tick-red.png"
                                    alt="tick"
                                />
                            </div>
                            <p>High fidelity design</p>
                        </div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div>
                                <img
                                    class="p-3 bg-brand-red-1 rounded-full"
                                    src="../assets/tick-red.png"
                                    alt="tick"
                                />
                            </div>
                            <p>Prototype</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
                <div
                    class="md:flex md:items-center md:justify-between md:space-x-12 text-sm md:text-base"
                >
                    <div class="md:flex-1 mb-8 md:mb-0">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >The problem</h2>
                        <p>The difficulty of knowing how to send a package and knowing the dimensions and and weights of packages and parcels which are usually a major criteria in creating a shipping request. Also a major problem was tracking each major milestone in the packages journey</p>
                    </div>
                    <div class="md:flex-1">
                        <img
                            v-if="themeColor === 'light'"
                            class="w-full"
                            src="../assets/problem-photo.png"
                            alt="Project"
                        />
                        <img
                            v-else
                            class="w-full"
                            src="../assets/problem-photo-dark.png"
                            alt="Project"
                        />
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
                <div class="mb-16 md:w-5/6 mx-auto text-center text-sm md:text-base">
                    <h1
                        class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                    >Project Timeline</h1>
                    <p
                        class="mb-4"
                    >Although I was the sole designer of this project I didn't work alone, it was a strong team effort that included the project manager, content manager, Stakeholders, and three skilled developers. We communicated and brainstormed throughout the entire process</p>
                    <p>
                        Project timeline:
                        <span class="font-bold">4 weeks</span>
                    </p>
                </div>
                <div
                    class="md:flex md:flex-wrap md:justify-center md:space-x-4 text-white font-semibold"
                >
                    <div
                        class="mb-4 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-blue-3 via-brand-blue-4 to-brand-blue-5"
                    >Week 1: Interviews</div>
                    <div
                        class="mb-4 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-orange-4 to-brand-orange-5"
                    >Week 2: Research</div>
                    <div
                        class="mb-4 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-purple-2 to-brand-purple-3"
                    >Week 3: Brainstorming & IA</div>
                    <div
                        class="mb-4 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-red-2 to-brand-red-3"
                    >Week 4: Visual design</div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
                <div class="hidden md:flex items-center justify-between space-x-12">
                    <div class="flex-1 mb-12">
                        <img class="w-full" src="../assets/trigle-research.png" alt="Research" />
                    </div>
                    <div class="flex-1 text-sm md:text-base">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >User Interviews</h2>
                        <p
                            class="mb-6"
                        >Interviews & surveys are aimed at getting an indepth approach of how our targeted users would engage the product, determine their pain points, challenges, what they would love to have on the platform and structure all to get the best solution for their problems.</p>
                        <p>I gathered the data from the interviews and structured out their pains and needs to have a structure for an empathy mapping</p>
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="block md:hidden text-sm md:text-base">
                    <div class="mb-12">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >User Interviews</h2>
                        <p
                            class="mb-6"
                        >Interviews & surveys are aimed at getting an indepth approach of how our targeted users would engage the product, determine their pain points, challenges, what they would love to have on the platform and structure all to get the best solution for their problems.</p>
                        <p>I gathered the data from the interviews and structured out their pains and needs to have a structure for an empathy mapping</p>
                    </div>
                    <div class>
                        <img class="w-full" src="../assets/trigle-research.png" alt="Research" />
                    </div>
                </div>
                <!-- End of Mobile version -->
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
                <div class="hidden md:flex items-center justify-between space-x-12">
                    <div class="flex-1 mb-12">
                        <img
                            v-if="themeColor === 'light'"
                            class="w-full"
                            src="../assets/research-photo.png"
                            alt="Quantitative research"
                        />
                        <img
                            v-else
                            class="w-full"
                            src="../assets/research-photo-dark.png"
                            alt="Quantitative research"
                        />
                    </div>
                    <div class="flex-1 text-sm text-base">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Quantitative research result</h2>
                        <p>From the findings of our survey and interviews carried out along with an online research of users complaints from users of competitors products, the largest pain was the identifying of the dimensions of the package to be sent which is usually a requirement to detemine shipment cost</p>
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="block md:hidden text-sm md:text-base">
                    <div class="mb-12">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Quantitative research result</h2>
                        <p>From the findings of our survey and interviews carried out along with an online research of users complaints from users of competitors products, the largest pain was the identifying of the dimensions of the package to be sent which is usually a requirement to detemine shipment cost</p>
                    </div>
                    <div class>
                        <img
                            v-if="themeColor === 'light'"
                            class="w-full"
                            src="../assets/research-photo.png"
                            alt="Quantitative research"
                        />
                        <img
                            v-else
                            class="w-full"
                            src="../assets/research-photo-dark.png"
                            alt="Quantitative research"
                        />
                    </div>
                </div>
                <!-- End of Mobile version -->
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16 text-white bg-brand-black-4">
                <h2
                    class="mb-16 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair text-center"
                >Personas</h2>
                <div class="lg:flex lg:space-x-14 lg:justify-center text-xs">
                    <div class="sm:flex sm:space-x-6 mb-12 lg:mb-0">
                        <div class="sm:flex-1">
                            <div class="flex space-x-4 items-center mb-6">
                                <div>
                                    <img src="../assets/personas-1.png" alt="Man" />
                                </div>
                                <div>
                                    <h4 class="mb-2 font-bold text-sm">Jonathan Ini</h4>
                                    <p class>Accountant</p>
                                </div>
                            </div>
                            <div
                                class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5"
                            >Rarely use logistics services</div>
                            <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5">
                                <h4 class="mb-4 font-bold text-sm">About Jonathan</h4>
                                <p class>
                                    Jonathan is an Accountant with over 3 years working experience, he is a graduate of the Convenant university Ota.
                                    <br />He is a calm, inquisitive, career driven and a lover of family
                                </p>
                            </div>
                        </div>
                        <div class="sm:flex-1">
                            <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5">
                                <h4 class="mb-4 font-bold text-sm">Demographics</h4>
                                <p class>27 years old</p>
                                <p class>Lives in Lagos, Nigeria</p>
                                <p class>Single</p>
                            </div>
                            <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5">
                                <h4 class="mb-4 font-bold text-sm">Goals and needs</h4>
                                <p
                                    class
                                >A means to be able to send packages to his siblings abroad and be aware of everything going on along the delivery</p>
                            </div>
                            <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5">
                                <h4 class="mb-4 font-bold text-sm">Pain points</h4>
                                <p
                                    class
                                >Its really difficult to know the exact or approximate dimensions of your shipments due to the fact i dont know alot about dimensioning</p>
                            </div>
                        </div>
                    </div>
                    <div class="sm:flex sm:space-x-6">
                        <div class="sm:flex-1">
                            <div class="flex space-x-4 items-center mb-6">
                                <div>
                                    <img src="../assets/personas-2.png" alt="Man" />
                                </div>
                                <div>
                                    <h4 class="mb-2 font-bold text-sm">Damilola Peters</h4>
                                    <p class>Businessman</p>
                                </div>
                            </div>
                            <div
                                class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5"
                            >Very frequency in using logistics services</div>
                            <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5">
                                <h4 class="mb-4 font-bold text-sm">About Damilola</h4>
                                <p
                                    class
                                >Damilola is an Entrepreneur into fabric exportation. He has been into the exportation business for 8 years and wishes to expand his business from just Asia to Europe aswell</p>
                            </div>
                        </div>
                        <div class="sm:flex-1">
                            <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5">
                                <h4 class="mb-4 font-bold text-sm">Demographics</h4>
                                <p class>32 years old</p>
                                <p class>Lives in Kenya, Nairobi</p>
                                <p class>Married</p>
                            </div>
                            <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5">
                                <h4 class="mb-4 font-bold text-sm">Goals and needs</h4>
                                <p
                                    class
                                >A means to be able to send my goods to to my business partners at flexible timings based on urgency</p>
                            </div>
                            <div class="lg:w-52 mb-6 p-6 rounded-md bg-brand-black-5">
                                <h4 class="mb-4 font-bold text-sm">Pain points</h4>
                                <p
                                    class
                                >The fact that i would have to wait sometimes for days befor the container gets filled with other peoples products so all can be shipped together slows my business down</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
                <div class="hidden sm:flex items-center space-x-12 text-sm md:text-base">
                    <div class="flex-1 grid grid-cols-3 gap-4">
                        <div>
                            <img
                                v-if="themeColor === 'light'"
                                src="../assets/fedex.png"
                                alt="FedEx"
                            />
                            <img v-else src="../assets/fedex-dark.png" alt="FedEx" />
                        </div>
                        <div>
                            <img v-if="themeColor === 'light'" src="../assets/dhl.png" alt="DHL" />
                            <img v-else src="../assets/dhl-dark.png" alt="DHL" />
                        </div>
                        <div>
                            <img v-if="themeColor === 'light'" src="../assets/ups.png" alt="UPS" />
                            <img v-else src="../assets/ups-dark.png" alt="UPS" />
                        </div>
                        <div>
                            <img
                                v-if="themeColor === 'light'"
                                src="../assets/xpologistics.png"
                                alt="XPOLogistics"
                            />
                            <img v-else src="../assets/xpologistics-dark.png" alt="XPOLogistics" />
                        </div>
                        <div>
                            <img
                                v-if="themeColor === 'light'"
                                src="../assets/expeditors.png"
                                alt="Expeditors"
                            />
                            <img v-else src="../assets/expeditors-dark.png" alt="Expeditors" />
                        </div>
                        <div>
                            <img v-if="themeColor === 'light'" src="../assets/gig.png" alt="Gig" />
                            <img v-else src="../assets/gig-dark.png" alt="Gig" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Competitor analysis</h2>
                        <p>In order to understand the market, i conducted a SWOT analysis on the clients top competitors. Here i investigated the in’s and out’s of the companies, their strengths and weakness, opportunities and potential threats</p>
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="block sm:hidden">
                    <div class="mb-12 text-sm">
                        <h3 class="mb-6 text-2xl font-bold font-playfair">Competitor analysis</h3>
                        <p>In order to understand the market, i conducted a SWOT analysis on the clients top competitors. Here i investigated the in’s and out’s of the companies, their strengths and weakness, opportunities and potential threats</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <img src="../assets/fedex.png" alt="FedEx" />
                        </div>
                        <div>
                            <img src="../assets/dhl.png" alt="DHL" />
                        </div>
                        <div>
                            <img src="../assets/ups.png" alt="UPS" />
                        </div>
                        <div>
                            <img src="../assets/xpologistics.png" alt="XPOLogistics" />
                        </div>
                        <div>
                            <img src="../assets/expeditors.png" alt="Expeditors" />
                        </div>
                        <div>
                            <img src="../assets/gig.png" alt="Gig" />
                        </div>
                    </div>
                </div>
                <!-- End of mobile version -->
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16">
                <div class="mb-20 md:w-5/6 mx-auto text-center text-sm md:text-base">
                    <h2
                        class="mb-8 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                    >Design strategy</h2>
                    <p>My design strategy comprised of integrated planning processes that examined the relationships between how the design and business may complement one another, in simple terms finding a balance between business objectives and creative solutions</p>
                </div>
                <div class="flex justify-center mb-20">
                    <img class="mx-auto" src="../assets/strategy.png" alt="Design strategy" />
                </div>
                <div class="md:flex md:space-x-6 text-sm md:text-base">
                    <div class="md:flex-1 mb-12 md:mb-0">
                        <div class="flex items-center mb-10">
                            <div class="w-16 h-16 rounded-full bg-brand-green-1"></div>
                            <h3
                                class="transform -translate-x-4 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                            >Business goal</h3>
                        </div>
                        <div class="flex space-x-5 mb-6">
                            <div class>
                                <img
                                    class="p-2 rounded-full bg-brand-green-1"
                                    src="../assets/tick-white.png"
                                    alt="Tick"
                                />
                            </div>
                            <p
                                class="flex-1"
                            >To enable smooth integrations with 3rd party companies to ease delivery, minimize cost</p>
                        </div>
                        <div class="flex space-x-5">
                            <div>
                                <img
                                    class="p-2 rounded-full bg-brand-green-1"
                                    src="../assets/tick-white.png"
                                    alt="Tick"
                                />
                            </div>
                            <p>Increase users retention</p>
                        </div>
                    </div>
                    <div class="md:flex-1 mb-12 md:mb-0">
                        <div class="flex items-center mb-10">
                            <div class="w-16 h-16 rounded-full bg-brand-green-1"></div>
                            <h3
                                class="transform -translate-x-4 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                            >Target users</h3>
                        </div>
                        <div class="flex space-x-5 mb-6">
                            <div>
                                <img
                                    class="p-2 rounded-full bg-brand-green-1"
                                    src="../assets/tick-white.png"
                                    alt="Tick"
                                />
                            </div>
                            <p>Businesses with foreign customers</p>
                        </div>
                        <div class="flex space-x-5">
                            <div>
                                <img
                                    class="p-2 rounded-full bg-brand-green-1"
                                    src="../assets/tick-white.png"
                                    alt="Tick"
                                />
                            </div>
                            <p>People with family and friends abroad</p>
                        </div>
                    </div>
                    <div class="md:flex-1 mb-12 md:mb-0">
                        <div class="flex items-center mb-10">
                            <div class="w-16 h-16 rounded-full bg-brand-green-1"></div>
                            <h3
                                class="transform -translate-x-4 text-xl md:text-2xl lg:text-3xl font-bold font-playfair"
                            >Platforms</h3>
                        </div>
                        <div class="flex space-x-5 mb-6">
                            <div>
                                <img
                                    class="p-2 rounded-full bg-brand-green-1"
                                    src="../assets/tick-white.png"
                                    alt="Tick"
                                />
                            </div>
                            <p>Web Application</p>
                        </div>
                        <div class="flex space-x-5">
                            <div>
                                <img
                                    class="p-2 rounded-full bg-brand-green-1"
                                    src="../assets/tick-white.png"
                                    alt="Tick"
                                />
                            </div>
                            <p>Mobile App - IOS & Android</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16 text-sm md:text-base">
                <div class="mb-12 md:mb-16 md:w-2/3 mx-auto text-center">
                    <h2
                        class="mb-6 text-3xl md:text-6xl font-semibold font-playfair text-center"
                    >The Solution</h2>
                    <p>Below shows a few of the screens that portrayed the soltions to the stated problem in the most user friendly manner</p>
                </div>
                <div class="hidden md:flex items-center justify-between space-x-12 py-20">
                    <div class="flex-1">
                        <h2
                            class="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Main dashboard</h2>
                        <p>This shows the dashboard of the users showing all their shipments analysis and various activities in a simplified manner that presents the informations to you at a glance</p>
                    </div>
                    <div class="flex-1">
                        <img class="w-full" src="../assets/solution-1.png" alt="Solution" />
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="block md:hidden mb-24">
                    <div class="mb-12">
                        <img class="w-full" src="../assets/solution-1.png" alt="Solution" />
                    </div>
                    <div class="text-center">
                        <h2 class="mb-4 text-2xl font-bold font-playfair">Main dashboard</h2>
                        <p
                            class
                        >This shows the dashboard of the users showing all their shipments analysis and various activities in a simplified manner that presents the informations to you at a glance</p>
                    </div>
                </div>
                <!--  -->
                <div
                    class="md:flex md:items-center md:justify-between md:space-x-12 mb-24 md:mb-0 md:py-20"
                >
                    <div class="md:flex-1 mb-12 md:mb-0">
                        <img class="w-full" src="../assets/solution-2.png" alt="Solution" />
                    </div>
                    <div class="md:flex-1 text-center md:text-left">
                        <h2
                            class="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Tracking page</h2>
                        <p
                            class
                        >This page is where shipmensts are searched for and tracked in a simplified manner displaying to you the status of your shipment and the expected delivery date shown first as the most important things, then if you want to get more info, a table with the various listings of every location or update is shown</p>
                    </div>
                </div>
                <div class="hidden md:flex items-center justify-between space-x-12 py-20">
                    <div class="flex-1">
                        <h2
                            class="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
                        >Create shipments</h2>
                        <p>Based on the users research on their pain points, the shipment creation process starts from a page to upload your shipment and from your upload, it is scanned and the dimensions is estimated for you with little artificial intelligence, that solves the problem of getting stuck on dimensions</p>
                    </div>
                    <div class="flex-1">
                        <img class="w-full" src="../assets/solution-3.png" alt="Solution" />
                    </div>
                </div>
                <!-- Mobile version -->
                <div class="block md:hidden">
                    <div class="mb-12">
                        <img class="w-full" src="../assets/solution-3.png" alt="Solution" />
                    </div>
                    <div class="text-center md:text-left">
                        <h2
                            class="mb-4 text-2xl lg:text-5xl font-bold font-playfair"
                        >Create shipments</h2>
                        <p>Based on the users research on their pain points, the shipment creation process starts from a page to upload your shipment and from your upload, it is scanned and the dimensions is estimated for you with little artificial intelligence, that solves the problem of getting stuck on dimensions</p>
                    </div>
                </div>
                <!-- End of Mobile version -->
            </section>
            <section class="max-w-7xl mx-auto py-20 px-4 md:px-16 text-sm md:text-base">
                <div class="mb-20 md:w-5/6 mx-auto text-center">
                    <h2
                        class="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair"
                    >Conclusion</h2>
                    <p>The experience of this project was an insightful one, the aim to simplify the process even further is in progress and results from feedback of V1 would be used to make the users experience better and solve the problems better for the users</p>
                </div>
                <div class="flex justify-center">
                    <img src="../assets/conclusion.png" alt="Conclusion" />
                </div>
            </section>
            <section class="max-w-7xl mx-auto py-20 md:px-16">
                <h1
                    class="mb-16 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair text-center"
                >Other Projects</h1>
                <div class="hidden md:block">
                    <div class="flex items-center space-x-8">
                        <router-link to="/">
                            <div>
                                <img class="w-full" src="../assets/bitpowr.png" alt="Bitpowr" />
                            </div>
                        </router-link>
                        <router-link to="/doorstep">
                            <div>
                                <img class="w-full" src="../assets/doorstep.png" alt="Doorstep" />
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- Mobile version -->
                <section
                    class="block md:hidden works-box mb-20 py-28 px-14 bg-hero-image bg-no-repeat bg-cover bg-brand-orange-1 text-white"
                >
                    <div class="text-center">
                        <div class="mb-20">
                            <h2 class="mb-4 text-2xl font-semibold font-playfair">Trigle</h2>
                            <p class="mb-12 text-xl font-light">Food delivery, Commerce</p>
                            <router-link
                                to="/doorstep"
                                class="inline-block pb-1 text-xl font-semibold border-b-2"
                            >Case Study</router-link>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/trigle-home.png" alt="Trigle home photo" />
                    </div>
                </section>
                <section
                    class="block md:hidden works-box mb-20 py-28 px-14 bg-hero-image bg-no-repeat bg-cover bg-brand-red-5 text-white"
                >
                    <div class="text-center">
                        <div class="mb-20">
                            <h2 class="mb-4 text-2xl font-semibold font-playfair">TrustBreed</h2>
                            <p class="mb-12 text-xl font-light">Customer Service, B2C</p>
                            <router-link
                                to="/trustbreed"
                                class="inline-block pb-1 text-xl font-semibold border-b-2"
                            >Case Study</router-link>
                        </div>
                    </div>
                    <div class="flex-1">
                        <img src="../assets/trustbreed-home.png" alt="Trustbreed home photo" />
                    </div>
                </section>
                <!-- End of mobile version -->
            </section>
            <BookAppointment />
        </div>
    </div>
</template>

<script>
// import ProjectResponsibilities from '../components/ProjectResponsibilities'
import BookAppointment from '@/components/BookAppointment'
export default {
    name: "Doorstep",
    components: { BookAppointment },
    data() {
        return {
            projects: [
                {
                    iconUrl: require("../assets/discover-icon.png"),
                    title: "Discover",
                    text: "Discovery was the first phase in the UX-design process that involved",
                    bgColor: "bg-brand-purple-1",
                    tickUrl: require("../assets/tick-purple.png"),
                    items: [
                        "Design strategy",
                        "Stakeholder interview",
                        "Market strategy",
                        "Competitor analysis"
                    ]
                },
                {
                    iconUrl: require("../assets/define-icon.png"),
                    title: "Define",
                    text: "Defining a product is a phase in the UX-design process that involves",
                    bgColor: "bg-brand-blue-2",
                    tickUrl: require("../assets/tick-blue.png"),
                    items: [
                        "User Research",
                        "User personas",
                        "Data Gathering",
                        "Empathy mapping"
                    ]
                },
                {
                    iconUrl: require("../assets/ideate-icon.png"),
                    title: "Ideate",
                    text: "This part of the design process was where the product structure to shape",
                    bgColor: "bg-brand-orange-2",
                    tickUrl: require("../assets/tick-yellow.png"),
                    items: [
                        "Brainstorming",
                        "User flow",
                        "Information architecture",
                        "Card sorting"
                    ]
                },
                {
                    iconUrl: require("../assets/visual-icon.png"),
                    title: "Visual Design",
                    text: "The research and structuring was brought to life visually to solve the problem",
                    bgColor: "bg-brand-red-1",
                    tickUrl: require("../assets/tick-red.png"),
                    items: [
                        "Wireframe",
                        "Style guide generation",
                        "High fidelity design",
                        "Prototype"
                    ]
                }
            ]
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    computed: {
        themeColor() {
            return this.$store.state.themeColor;
        }
    },
}
</script>

<style>
div {
    font-family: "Euclid Circular A", sans-serif;
}
</style>