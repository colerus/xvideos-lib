import { should } from 'chai';
import videos from '../../videos';

before(() => {
  should();
});

describe('api/videos/fresh', () => {
  it('should list fresh video pages', async () => {
    const list = await videos.fresh({ page: 3 });

    list.should.be.an('object');
    list.pagination.should.be.an('object');
    list.pagination.page.should.be.equals(3);
    list.pagination.pages.should.be.an('array');
    list.pagination.pages[0].should.be.a('number');
    list.hasNext.should.be.a('function');
    list.hasNext().should.be.equals(true);
    list.hasPrevious.should.be.a('function');
    list.hasPrevious().should.be.equals(true);
    list.next.should.be.a('function');
    list.previous.should.be.a('function');
    list.videos.should.be.an('array');
    list.videos.forEach((video) => {
      video.should.be.an('object');
      video.should.have.ownPropertyDescriptor('duration');
      video.duration.should.be.a('string');
      video.should.have.ownPropertyDescriptor('path');
      video.path.should.be.a('string');
      video.should.have.ownPropertyDescriptor('profile');
      video.profile.should.be.an('object');
      video.profile.should.have.ownPropertyDescriptor('name');
      video.profile.name.should.be.an('string');
      video.profile.should.have.ownPropertyDescriptor('url');
      video.profile.url.should.be.an('string');
      video.should.have.ownPropertyDescriptor('title');
      video.title.should.be.a('string');
      video.should.have.ownPropertyDescriptor('url');
      video.url.should.be.a('string');
      video.should.have.ownPropertyDescriptor('views');
      video.views.should.be.a('string');
    });

    const previous = await list.previous();
    previous.should.be.an('object');
    previous.pagination.should.be.an('object');
    previous.pagination.page.should.be.equals(2);
    previous.pagination.pages.should.be.an('array');
    previous.pagination.pages[0].should.be.a('number');
    previous.hasNext.should.be.a('function');
    previous.hasNext().should.be.equals(true);
    previous.hasPrevious.should.be.a('function');
    previous.hasPrevious().should.be.equals(false);
    previous.next.should.be.a('function');
    previous.previous.should.be.a('function');
    previous.videos.should.be.an('array');
    previous.videos.forEach((video) => {
      video.should.be.an('object');
      video.should.have.ownPropertyDescriptor('duration');
      video.duration.should.be.a('string');
      video.should.have.ownPropertyDescriptor('path');
      video.path.should.be.a('string');
      video.should.have.ownPropertyDescriptor('profile');
      video.profile.should.be.an('object');
      video.profile.should.have.ownPropertyDescriptor('name');
      video.profile.name.should.be.an('string');
      video.profile.should.have.ownPropertyDescriptor('url');
      video.profile.url.should.be.an('string');
      video.should.have.ownPropertyDescriptor('title');
      video.title.should.be.a('string');
      video.should.have.ownPropertyDescriptor('url');
      video.url.should.be.a('string');
      video.should.have.ownPropertyDescriptor('views');
      video.views.should.be.a('string');
    });

    const next = await list.next();
    next.should.be.an('object');
    next.pagination.should.be.an('object');
    next.pagination.page.should.be.equals(4);
    next.pagination.pages.should.be.an('array');
    next.pagination.pages[0].should.be.a('number');
    next.hasNext.should.be.a('function');
    next.hasNext().should.be.equals(true);
    next.hasPrevious.should.be.a('function');
    next.hasPrevious().should.be.equals(true);
    next.next.should.be.a('function');
    next.previous.should.be.a('function');
    next.videos.should.be.an('array');
    next.videos.forEach((video) => {
      video.should.be.an('object');
      video.should.have.ownPropertyDescriptor('duration');
      video.duration.should.be.a('string');
      video.should.have.ownPropertyDescriptor('path');
      video.path.should.be.a('string');
      video.should.have.ownPropertyDescriptor('profile');
      video.profile.should.be.an('object');
      video.profile.should.have.ownPropertyDescriptor('name');
      video.profile.name.should.be.an('string');
      video.profile.should.have.ownPropertyDescriptor('url');
      video.profile.url.should.be.an('string');
      video.should.have.ownPropertyDescriptor('title');
      video.title.should.be.a('string');
      video.should.have.ownPropertyDescriptor('url');
      video.url.should.be.a('string');
      video.should.have.ownPropertyDescriptor('views');
      video.views.should.be.a('string');
    });

    await list.refresh();
  }).timeout(10000);

  it('should fail when page parameter is beyond limit', async () => {
    let err;
    try {
      await videos.fresh({ page: Number.MAX_SAFE_INTEGER + 1 });
    } catch (error) {
      err = error;
    } finally {
      err.should.be.an('error');
    }
  }).timeout(10000);

  it('should fail when page parameter is less than 1', async () => {
    let err;
    try {
      await videos.fresh({ page: 0 });
    } catch (error) {
      err = error;
    } finally {
      err.should.be.an('error');
    }
  }).timeout(10000);
});
