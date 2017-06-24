# Artic

### About

An iOS & Android app for MUAs & hair stylists looking to advertise their trade online. Clients can browse, contact and also book these professionals through the app.

#### MUA
* Photos & videos of recent work
* The type of make up they do (arabic/western/asian etc)
* Availability
* Receive bookings and payment through the app

#### Clients
* Search for MUA by type of make up/price/location and availability
* Use a booking form to book a MUA and pay through the app

### Branches
* artic/initial-build
* artic/navigation
* artic/state
* artic/landing
* artic/firebase

### Packages to use
* For all elements - https://github.com/GeekyAnts/NativeBase
* Image picker - https://github.com/react-community/react-native-image-picker
* Date picker - https://www.npmjs.com/package/react-native-datepicker
* Vector icons - https://github.com/oblador/react-native-vector-icons
* Flux architecture - https://github.com/dvajs/dva
* Firebase connection - https://github.com/invertase/react-native-firebase
* Pushing updated code to iOS store without bringing down the app - https://github.com/Microsoft/react-native-code-push
* Jest testing - https://github.com/facebook/jest
* Payment gateway in UAE - https://docs.start.payfort.com/
* Mesages between each user - https://firebase.google.com/docs/cloud-messaging/

### Roadmap
* Phase 1
  * Full sitemap with components of each view
  * Design and draw out a basic app of each page and state
  * Outline reuseable components and match npm packages for these
* Phase 2
  * Install React Native, Jest and any other dependancy library
  * Add base main menu global wrapper and navigational package
  * Redux needs to be added alongside Firebase for the data management - IN PROGRESS

### Sitemap
* Views
  * Landing
    * Thumbnail list of MUAs (reusable component)
  * MUA (1/2)
    * Name
    * Gender
    * Location
    * Description 140 characters
    * List of photos
    * Type of make up (Western/Arabic/Asian/African)
    * Availability (reusable component)
    * Request booking section
      * Date picker (reusable component)
      * Input boxes (reusable component)
  * MUA photo
    * Photo
    * Description 140 characters
  * Client (2/2)
    * Name
    * Gender
    * Location
    * Description 140 characters
    * Photo (optional)
  * Create
    * Name
    * Location
    * Description
    * Upload thumbnail
    * upload photos (if MUA)
    * type of makeup (if MUA)
  * Search
    * Tabs - People/Style/Location
    * Results - Thumbnail list of MUAs (reusable component)
  * Sign in
    * username/password login
    * username/password signup clicking takes you to Create view
  * Messages
    * List of messages
  * Message - messages using the Firebase app
* Menu (same as Instagram)
  * Home button - opens up Landing view
  * Search button - opens up Search view
  * Messages button - opens up your messages
  * Profile button - opens up your MUA or Sign in view

### Components
* Top menu and back button
* Bottom menu
* Thumbnail list of MUAs (order should be random at the moment)
* Availability
* Button
* Date picker
* Inputs

### Android to dos
* Main navigation install for Android - https://wix.github.io/react-native-navigation/#/installation-android