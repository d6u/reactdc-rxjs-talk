import { createAction } from 'river-react';

export const navigateSubject = new Rx.Subject();
export const navigate = createAction(navigateSubject);
