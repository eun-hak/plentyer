'use client';

import { useEffect, useLayoutEffect } from 'react';

/**
 * 브라우저 확장 프로그램으로 인한 하이드레이션 경고를 억제합니다.
 * 개발 환경에서만 작동합니다.
 */
export function SuppressHydrationWarning() {
  // #region agent log
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'SuppressHydrationWarning.tsx:useLayoutEffect',message:'Component mounting - checking DOM state',data:{hasDocument:!!document,hasHead:!!document.head,headChildrenCount:document.head?.children.length||0,bodyChildrenCount:document.body?.children.length||0,hasEndicCrx:!!document.getElementById('__endic_crx__'),hasWxtElements:!!document.querySelector('[data-wxt-integrated]')},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    }
  }, []);
  // #endregion

  // #region agent log
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'SuppressHydrationWarning.tsx:useEffect',message:'useEffect running - after hydration',data:{isDevelopment:process.env.NODE_ENV==='development',headHTML:document.head?.innerHTML.substring(0,500)||'',hasEndicCrx:!!document.getElementById('__endic_crx__'),wxtElements:Array.from(document.querySelectorAll('[data-wxt-integrated]')).map(el=>({tag:el.tagName,id:el.id,attributes:Array.from(el.attributes).map(a=>`${a.name}="${a.value}"`).join(' ')})),metadataBoundary:Array.from(document.querySelectorAll('__next_metadata_boundary__')).length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    }
  }, []);
  // #endregion

  // #region agent log
  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // Early interception before React hydrates
      const originalError = console.error;
      const originalWarn = console.warn;
      
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'SuppressHydrationWarning.tsx:filterSetup',message:'Setting up console filters',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion

      console.error = (...args: any[]) => {
        // #region agent log
        const message = args[0]?.toString() || '';
        const shouldFilter = message.includes('Hydration failed') || message.includes('hydration') || message.includes('__endic_crx__') || message.includes('__wxt') || message.includes('data-wxt-integrated') || message.includes('did not match');
        fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'SuppressHydrationWarning.tsx:console.error',message:'console.error called',data:{message:message.substring(0,200),shouldFilter,argsCount:args.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion

        if (
          message.includes('Hydration failed') ||
          message.includes('hydration') ||
          message.includes('__endic_crx__') ||
          message.includes('__wxt') ||
          message.includes('data-wxt-integrated') ||
          message.includes('did not match') ||
          message.includes('suppressHydrationWarning')
        ) {
          return;
        }
        originalError.apply(console, args);
      };

      console.warn = (...args: any[]) => {
        // #region agent log
        const message = args[0]?.toString() || '';
        const shouldFilter = message.includes('Hydration') || message.includes('__endic_crx__') || message.includes('__wxt');
        fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'SuppressHydrationWarning.tsx:console.warn',message:'console.warn called',data:{message:message.substring(0,200),shouldFilter},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion

        if (
          message.includes('Hydration') ||
          message.includes('__endic_crx__') ||
          message.includes('__wxt')
        ) {
          return;
        }
        originalWarn.apply(console, args);
      };

      // #region agent log
      // Monitor DOM mutations to see when extension adds elements
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              const el = node as Element;
              if (el.id === '__endic_crx__' || el.hasAttribute('data-wxt-integrated')) {
                fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'SuppressHydrationWarning.tsx:mutationObserver',message:'Extension element detected',data:{tag:el.tagName,id:el.id,attributes:Array.from(el.attributes).map(a=>`${a.name}="${a.value}"`).join(' '),parent:el.parentElement?.tagName,location:el.parentElement?.id||el.parentElement?.className},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
              }
            }
          });
        });
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-wxt-integrated', 'id']
      });
      // #endregion

      return () => {
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/75d80d41-7e6c-45b6-9215-177aa7e729ff',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'SuppressHydrationWarning.tsx:cleanup',message:'Cleaning up filters',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        console.error = originalError;
        console.warn = originalWarn;
        observer.disconnect();
      };
    }
  }, []);
  // #endregion

  return null;
}

