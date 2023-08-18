import React from "react";
import { AppWrapper } from "../../components/main/AppWrapper";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAppSelector } from '../../hooks/redux';
import parse from 'html-react-parser'
import { renderToString } from 'react-dom/server'

export const Cabinet = () => {
  const user = localStorage.getItem('accessToken')

  const addedTemplates = useAppSelector(s => s.Template)
  if (!user) return <Navigate to={ROUTES.auth.authRoute} />

  return (
    <React.Fragment>
      <AppWrapper>
        {
          addedTemplates.map(({placeholders, layout}, index) => {
            if (!placeholders) return;
            return (
              <React.Fragment key={index}>
                {
                  parse(
                    placeholders.reduce((total, { key, value }) => {
                      return total.replace(key, value)
                    }, renderToString(layout as React.ReactElement))
                  )
                }
              </React.Fragment>
            )
          })
        }
      </AppWrapper>
    </React.Fragment>
  );
};
