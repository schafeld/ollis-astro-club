# README: Foundational Documents for AI-Assisted Development

## Overview

This directory contains the foundational documents that guide AI-assisted construction of the Olli's Astro Club website. These documents establish standards, workflows, and best practices for consistent, high-quality development.

## Document Structure

### Core Documentation

1. **[Claude.md](./Claude.md)** - Primary AI development guide
   - Project overview and mission
   - Technical architecture and stack
   - Development principles and quality standards
   - AI agent instructions and workflows

2. **[docs/PROJECT-STRUCTURE.md](./docs/PROJECT-STRUCTURE.md)** - Project organization guide
   - Directory structure and file organization
   - Naming conventions and standards
   - Asset management guidelines
   - IDE configuration recommendations

3. **[docs/DEVELOPMENT-WORKFLOW.md](./docs/DEVELOPMENT-WORKFLOW.md)** - Development process guide
   - Git workflow and branching strategy
   - Testing strategies (unit, integration, E2E)
   - Code review process and quality gates
   - CI/CD pipeline configuration

4. **[docs/CONTENT-GUIDELINES.md](./docs/CONTENT-GUIDELINES.md)** - Educational content standards
   - Age-appropriate content creation
   - Scientific accuracy requirements
   - Accessibility and inclusive design
   - Educational effectiveness guidelines

5. **[docs/COMPONENT-DEVELOPMENT.md](./docs/COMPONENT-DEVELOPMENT.md)** - Technical component guide
   - LitElement patterns and best practices
   - Storybook integration and documentation
   - Testing strategies for components
   - Performance optimization techniques

6. **[docs/AI-BEST-PRACTICES.md](./docs/AI-BEST-PRACTICES.md)** - Modern development recommendations
   - Current web development best practices
   - Educational technology standards
   - Progressive web app implementation
   - Privacy and security considerations

## Quick Start for AI Assistants

### Essential Reading Order

1. **Start with Claude.md** - Understand project context and technical requirements
2. **Review PROJECT-STRUCTURE.md** - Learn file organization and naming conventions
3. **Study COMPONENT-DEVELOPMENT.md** - Master the technical patterns and practices
4. **Reference CONTENT-GUIDELINES.md** - Ensure educational content meets standards
5. **Follow DEVELOPMENT-WORKFLOW.md** - Implement proper development processes

### Key Principles to Remember

- **Educational First**: All decisions should prioritize learning outcomes for ages 8-16
- **Accessibility**: WCAG 2.1 AA compliance is mandatory, not optional
- **Modern Standards**: Use current web standards and best practices
- **Component-Based**: Build reusable, well-documented components
- **Performance**: Optimize for mobile devices and slow connections
- **Scientific Accuracy**: Verify all astronomical content with authoritative sources

## Project Context

### Target Audience
- **Primary**: Students aged 8-16 interested in astronomy
- **Secondary**: Teachers, parents, and astronomy educators
- **Geographic**: Initially German and English speaking regions

### Technical Requirements
- **Hosting**: Shared hosting environment (PHP/MySQL available)
- **Browsers**: Modern browsers with progressive enhancement
- **Devices**: Mobile-first responsive design
- **Performance**: Optimized for slower internet connections

### Educational Goals
- Foster curiosity about space and astronomy
- Provide age-appropriate scientific education
- Support different learning styles and abilities
- Encourage hands-on exploration and creativity

## Development Standards

### Code Quality
- TypeScript strict mode enabled
- ESLint rules enforced (zero warnings)
- Unit test coverage >80%
- Comprehensive Storybook documentation

### Accessibility Requirements
- Keyboard navigation support
- Screen reader compatibility
- High color contrast ratios
- Alternative text for all images

### Performance Targets
- Lighthouse Performance Score >90
- Core Web Vitals within recommended ranges
- Mobile-first responsive design
- Progressive enhancement approach

## Content Standards

### Scientific Accuracy
- Use authoritative sources (NASA, ESA, IAU)
- Regular fact-checking and updates
- Age-appropriate explanations without oversimplification
- Clear distinction between facts and theories

### Educational Effectiveness
- Clear learning objectives for each section
- Multiple representation methods (visual, auditory, kinesthetic)
- Formative assessment and feedback
- Progress tracking and achievement recognition

### Inclusive Design
- Gender-neutral language and examples
- Diverse representation in imagery and examples
- Cultural sensitivity in content and references
- Support for different abilities and learning styles

## Workflow Integration

### For New Features
1. Review relevant documentation sections
2. Create component following established patterns
3. Write comprehensive tests (unit + integration)
4. Create Storybook stories with documentation
5. Ensure accessibility compliance
6. Verify educational content accuracy

### For Bug Fixes
1. Identify root cause using debugging guidelines
2. Write test to reproduce the issue
3. Implement fix following code standards
4. Verify fix doesn't break existing functionality
5. Update documentation if necessary

### For Content Updates
1. Verify scientific accuracy with authoritative sources
2. Ensure age-appropriate language and complexity
3. Check accessibility of new content
4. Test with target audience when possible
5. Update related documentation and tests

## Tools and Resources

### Development Tools
- **VS Code** with Lit plugin and ESLint
- **Vite** for fast development and building
- **Vitest** for unit testing
- **Playwright** for end-to-end testing
- **Storybook** for component development and documentation

### External Resources
- **NASA Education**: https://www.nasa.gov/audience/foreducators/
- **ESA Educational**: https://www.esa.int/Education
- **MDN Web Docs**: https://developer.mozilla.org/
- **Web Accessibility Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **LitElement Documentation**: https://lit.dev/

## Continuous Improvement

### Regular Reviews
- **Monthly**: Code quality and performance metrics
- **Quarterly**: Educational content accuracy and effectiveness
- **Annually**: Technology stack updates and security audits
- **As Needed**: User feedback integration and bug fixes

### Feedback Integration
- User analytics and engagement metrics
- Teacher and parent feedback
- Student usability testing
- Expert educational review

## Getting Help

### Documentation Questions
- Check existing documentation first
- Reference external resources for web standards
- Consult educational technology best practices

### Technical Issues
- Review error messages and stack traces
- Check browser developer tools
- Run tests to isolate problems
- Verify component functionality in Storybook

### Educational Content Questions
- Verify with multiple authoritative sources
- Consider age-appropriateness and learning objectives
- Check accessibility and inclusive design
- Test with sample users when possible

---

*These foundational documents provide comprehensive guidance for building a high-quality educational astronomy website. Follow these guidelines to ensure consistency, quality, and educational effectiveness throughout the development process.*