/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga>. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/express-request-headers-filter/LICENSE
 */

import * as express from 'express';
import * as request from 'request';

declare function expressRequestHeaders(req: request.Request, res: express.Response, headersToSave?: string[]): void;

export = expressRequestHeaders;
