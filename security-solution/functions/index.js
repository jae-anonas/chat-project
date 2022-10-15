/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the Firebase SDK for Google Cloud Functions v2.
const {
  beforeUserCreated,
  HttpsError,
} = require("firebase-functions/v2/identity");

// SOLUTION 3: Uncommented the following auth blocking function and added logic
// that blocks email registration from any domain other than `example.com`.

exports.beforecreated = beforeUserCreated((event) => {
  const user = event.data;
  // Only users of a specific domain can sign up.
  if (!user.email || !user.email.endsWith("@example.com")) {
    throw new HttpsError("invalid-argument", "Unauthorized email");
  }
});