//
// Copyright (C) 2016-present Instructure, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

/* @flow */

import 'react-native'
import React from 'react'
import CourseDetailsTab from '../CourseDetailsTab.js'

const template = {
  ...require('../../../../../__templates__/tab'),
}

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const defaultProps = {
  tab: template.tab(),
  courseColor: 'white',
  onPress: () => {},
}

test('renders correctly', () => {
  let tree = renderer.create(
    <CourseDetailsTab {...defaultProps} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('default icon', () => {
  const props = {
    ...defaultProps,
    tab: template.tab({ id: 'test default icon' }),
  }

  let tree = renderer.create(
    <CourseDetailsTab {...props} />
  )

  expect(tree).toMatchSnapshot()
})
