import React from "react";
import { App } from "../../app/containers/App";
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from "styled-components";
import { template } from "./template";


export const render = (url: string, initialProps={}) : string => {
    const sheet = new ServerStyleSheet()
    try {   


        const stream = renderToString(sheet.collectStyles(
            <StaticRouter location={url}>
                <App/>
            </StaticRouter>
            )
        );

        const styleTags = sheet.getStyleTags();

        const html = template(stream, initialProps, styleTags);
        
        return html;
    } catch (_error) {
        console.error(_error)
    }
};